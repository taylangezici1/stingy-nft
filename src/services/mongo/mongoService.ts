import { connect } from "mongoose";

export abstract class MongoService<T> {
  constructor() {
    this.connect();
  }

  private async connect() {
    await connect(process.env.MONGO_URL);
  }

  public abstract createOne(createObj: T): Promise<string>;
  public abstract createMany(createObjs: T[]): Promise<string[]>;
  public abstract findOne(id: string): Promise<T | null>;
  public abstract findAll(id: string): Promise<T[]>;
  public abstract delete(id: string): Promise<void>;
  public abstract updateOne(id: string, updateObj: T): Promise<void>;
  public abstract where(query: Partial<T>): Promise<T[]>;
}
