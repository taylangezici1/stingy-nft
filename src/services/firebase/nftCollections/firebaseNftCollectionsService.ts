import { ICollectionDb } from "@/types";
import { FirebaseCollectionService } from "../firebaseCollectionService";

export class FirebaseNftCollectionsService extends FirebaseCollectionService<ICollectionDb> {
  constructor() {
    super("nft-collections");
  }
}
