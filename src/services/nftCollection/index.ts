import { INftCollection } from "@/types";
import { MongoNftCollectionsService } from "../mongo/nftCollections/mongoNftCollectionsService";
import { OpenseaService } from "../opensea";

export class NftCollectionService {
  private readonly mongoNftCollectionsService: MongoNftCollectionsService;
  private readonly openeseaService: OpenseaService;

  constructor() {
    this.mongoNftCollectionsService = new MongoNftCollectionsService();
    this.openeseaService = new OpenseaService();
  }

  public async getCollection(collectionSlug: string): Promise<INftCollection> {
    const collection = await this.mongoNftCollectionsService.where({
      slug: collectionSlug,
    });

    if (collection[0]) return collection[0];

    return await this.openeseaService.getCollection(collectionSlug);
  }

  public async saveCollection(collection: INftCollection) {
    return await this.mongoNftCollectionsService.createOne(collection);
  }
}
