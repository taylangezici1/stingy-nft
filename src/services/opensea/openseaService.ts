import { INft, INftCollection, INftCollectionRes } from "@/types";
import { FirebaseNftCollectionsService } from "../firebase/nftCollections/firebaseNftCollectionsService";
import { OpenSeaSDK, Chain } from "opensea-js";
import { providers } from "ethers";
import { mapNftCollection } from "@/mappers/opensea/nftCollection";
import { getStandardDeviation } from "@/helpers/math";
import { AxiosService } from "../axios";
import { MongoNftsService } from "../mongo/nfts/mongoNftsService";
import { mapNft } from "@/mappers/opensea/nft";
import { MongoNftCollectionsService } from "../mongo/nftCollections/mongoNftCollectionsService";

export class OpenseaService {
  private readonly firebaseNftCollectionsService: FirebaseNftCollectionsService;
  private readonly mongoNftsService: MongoNftsService;
  private readonly mongoNftCollectionsService: MongoNftCollectionsService;
  private readonly openseaSDK: OpenSeaSDK;
  private readonly axiosService: AxiosService;
  private readonly provider = new providers.JsonRpcProvider(
    "https://mainnet.infura.io"
  );

  constructor() {
    this.firebaseNftCollectionsService = new FirebaseNftCollectionsService();
    this.openseaSDK = new OpenSeaSDK(this.provider, {
      chain: Chain.Mainnet,
      apiKey: process.env.NEXT_PUBLIC_OPENSEA_API_KEY,
    });
    this.axiosService = new AxiosService();
    this.mongoNftsService = new MongoNftsService();
    this.mongoNftCollectionsService = new MongoNftCollectionsService();
  }

  public async getCollection(collectionSlug: string): Promise<INftCollection> {
    const collection = await this.mongoNftCollectionsService.where({
      slug: collectionSlug,
    });

    if (collection[0]) return collection[0]; // TODO: fix this someday

    const res = await this.openseaSDK.api.getCollection(collectionSlug);
    const { data } = await this.axiosService.openseaAxios.get<{
      collection: INftCollectionRes;
    }>(`/collection/${collectionSlug}`);

    return mapNftCollection(res, data.collection);
  }

  private async calculateTraitsDeviationScore(collection: INftCollection) {
    // TODO: type this
    const traits = collection.traits;
    const totalSupply = collection.totalSupply;
    const deviationScores: any = {}; // TODO: type this

    for (const [key, value] of Object.entries(traits)) {
      const noneCount =
        totalSupply -
        Object.values(value).reduce((accumulator, value) => {
          return accumulator + value;
        }, 0);
      value["none"] = noneCount;
      const deviation = getStandardDeviation(Object.values(value));
      deviationScores[key] = deviation;
    }

    return deviationScores;
  }

  public async fetchNfts(collection: INftCollection): Promise<INft[]> {
    const { contractAddress, totalSupply, _id } = collection;
    let res = await this.openseaSDK.api.getAssets({
      asset_contract_address: contractAddress,
    });
    let nfts = res.assets.map((nft) => mapNft(nft));

    // while (res.next) {
    //   res = await this.openseaSDK.api.getAssets({
    //     asset_contract_address: contractAddress,
    //     cursor: res.next
    //   });
    //   nfts = [...nfts, ...res.assets.map(nft => mapNft(nft))];
    // }

    await this.mongoNftsService.createMany(nfts);
    await this.mongoNftCollectionsService.updateAssetsFetched(_id);
    return nfts;
  }
}
