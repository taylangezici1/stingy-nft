import { connect } from "mongoose";

export class MongoService {
  constructor() {
    this.connect();
  }

  private async connect() {
    await connect(process.env.MONGO_URL);
  }
}
