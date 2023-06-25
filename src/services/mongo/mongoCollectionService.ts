import { getModelForClass } from "@typegoose/typegoose";
import { MongoService } from "./mongoService";
import { Model } from "mongoose";

export class MongoCollectionService<T> extends MongoService<T> {
  private collectionModel: Model<T>;

  constructor(public modelClass: any) {
    super();
    this.collectionModel = getModelForClass(modelClass);
    this.collectionModel.init();
  }

  public async createOne(createObj: T): Promise<string> {
    const { id } = await this.collectionModel.create(createObj);
    return id;
  }

  public async createMany(createObjs: T[]): Promise<string[]> {
    const res = await this.collectionModel.insertMany(createObjs);
    return res.map(item => item.id);
  }

  public async findOne(id: string): Promise<T | null> {
    return this.collectionModel.findById(id);
  }

  public async findAll(): Promise<T[]> {
    return this.collectionModel.find();
  }

  public async delete(id: string): Promise<void> {
    await this.collectionModel.findByIdAndDelete(id);
  }

  public async updateOne(id: string, updateObj: Partial<T>): Promise<void> {
    await this.collectionModel.findByIdAndUpdate(id, { updateObj });
  }

  public async where(query: Partial<T>): Promise<T[]> {
    return this.collectionModel.find(query);
  }
}
