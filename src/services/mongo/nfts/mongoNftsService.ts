import { prop } from "@typegoose/typegoose";
import { MongoCollectionService } from "../mongoCollectionService";
import { INft } from "@/types";

class Nfts implements INft {
  @prop()
  public name: string;
  @prop()
  public description: string;
  @prop()
  public imageUrl: string;
  @prop()
  public numSales: number;
  @prop()
  public openseaLink: string;
  @prop({ index: true })
  public tokenId: string;
  @prop()
  public traits: { traitType: string; value: string; traitCount: number }[];
}

export class MongoNftsService extends MongoCollectionService<INft> {
  constructor() {
    super(Nfts);
  }
}
