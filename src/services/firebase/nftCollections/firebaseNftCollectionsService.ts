import { INftCollection } from "@/types";
import { FirebaseCollectionService } from "../firebaseCollectionService";

export class FirebaseNftCollectionsService extends FirebaseCollectionService<INftCollection> {
  constructor() {
    super("nft-collections");
  }
}
