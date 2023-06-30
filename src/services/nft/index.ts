import { INftCollection } from "@/types";
import { MongoNftsService } from "../mongo/nfts/mongoNftsService";
import { OpenseaService } from "../opensea";

export class NftService {
  private readonly mongoNftService: MongoNftsService;
  private readonly openseaService: OpenseaService;

  constructor() {
    this.mongoNftService = new MongoNftsService();
    this.openseaService = new OpenseaService();
  }

  public async getNfts(nftCollection: INftCollection) {
    const nfts = await this.mongoNftService.where({
      collectionId: nftCollection.id,
    });

    if (nfts.length) return nfts;

    return await this.openseaService.getNfts(nftCollection);
  }

  public async getNft(nftCollection: INftCollection, tokenId: string) {
    const nft = await this.mongoNftService.where({
      collectionId: nftCollection.id,
      tokenId: tokenId,
    });
  }
}
