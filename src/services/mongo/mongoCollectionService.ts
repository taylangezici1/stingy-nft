import { getModelForClass } from "@typegoose/typegoose";
import { MongoService } from "./mongoService";
import { Model } from "mongoose";

export class MongoCollectionService<T> extends MongoService {
  private collectionModel: Model<T>;

  constructor(private modelClass: any) {
    super();
    this.collectionModel = getModelForClass(modelClass);
  }

  public async create(createObj: T): Promise<string> {
    const { id } = await this.collectionModel.create(createObj);
    return id;
  }
}
