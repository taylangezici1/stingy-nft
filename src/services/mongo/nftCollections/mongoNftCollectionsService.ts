import { INftCollection } from "@/types";
import { MongoCollectionService } from "../mongoCollectionService";
import { modelOptions, prop } from "@typegoose/typegoose";

class NftCollections implements INftCollection {
  @prop({
    index: true,
    unique: true,
    required: true,
  })
  public id: string;
  @prop()
  public name: string;
  @prop({ index: true })
  public slug: string;
  @prop()
  public imageUrl: string;
  @prop()
  public wikiUrl?: string;
  @prop()
  public externalUrl: string;
  @prop()
  public description: string;
  @prop()
  public traits: {
    [key: string]: {
      [key: string]: number;
    };
  };
  @prop()
  public totalSupply: number;
  @prop()
  public averagePrice: number;
  @prop()
  public floorPrice: number;
  @prop()
  public numOwners: number;
  @prop()
  public marketCap: number;
  @prop({ index: true })
  public contractAddress: string;
  @prop()
  public twitterUsername?: string;
  @prop()
  public instagramUsername?: string;
  @prop()
  public discordUrl?: string;
  @prop()
  public sellerFee: number;
  @prop()
  public isCreatorFeeEnforced: boolean;
  @prop({ default: Date.now() })
  public createdAt: Date;
  @prop({ default: Date.now() })
  public lastUpdatedAt: Date;
  @prop()
  public assetsFetched: boolean = false;
  @prop()
  public assetsLastFetchedAt?: Date;
}

export class MongoNftCollectionsService extends MongoCollectionService<INftCollection> {
  constructor() {
    super(NftCollections);
  }

  public async updateAssetsFetched(id: string) {
    await this.updateOne(id, {
      assetsFetched: true,
      assetsLastFetchedAt: new Date(),
    });
  }
}
