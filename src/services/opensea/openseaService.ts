import { ICollectionDb } from "@/types";
import { AxiosService } from "@/services/axios";
import { FirebaseNftCollectionsService } from "../firebase/nftCollections/firebaseNftCollectionsService";

export class OpenseaService {
  private readonly axiosService: AxiosService;
  private readonly firebaseNftCollectionsService: FirebaseNftCollectionsService;

  constructor() {
    this.axiosService = new AxiosService();
    this.firebaseNftCollectionsService = new FirebaseNftCollectionsService();
  }

  public async getCollectionRes(collectionName: string): Promise<ICollectionDb> {
    const { data } = await this.axiosService.openseaAxios.get<ICollectionDb>(
      `/collection/${collectionName}`
    );
    this.firebaseNftCollectionsService.create({ ...data } as ICollectionDb);
    return data;
  }
}
