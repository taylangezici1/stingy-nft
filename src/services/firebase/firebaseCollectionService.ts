import { FirebaseService } from "./firebaseService";
import { CreateObjectDto, UpdateObjectDto } from "@/types";

export class FirebaseCollectionService<T> extends FirebaseService<T> {
  private readonly BATCH_SIZE = 500;

  constructor(collectionPath: string) {
    super(collectionPath);
  }

  public async create(createObj: CreateObjectDto<T>) {
    const id = createObj?.id || this.generateRandomId(20);

    const docRef = this.db.doc(id);

    await docRef.create({ ...createObj, id } as T & { id: string });

    return id;
  }

  public async createBatch(createObjs: CreateObjectDto<T>[]) {
    const createdIds: string[] = [];
    const splitBatches = this.splitDataForBatchOps(createObjs) as CreateObjectDto<T>[][];

    for (const splitBatch of splitBatches) {
      const batch = this.db.firestore.batch();
      splitBatch.forEach((createObj: CreateObjectDto<T>) => {
        const id = createObj?.id || this.generateRandomId(20);

        const docRef = this.db.doc(id);

        batch.create(docRef, { ...createObj, id } as T & { id: string });
        createdIds.push(id);
      });
      await batch.commit();
    }

    return createdIds;
  }

  public async findOne(id: string) {
    const docRef = this.db.doc(id);

    const doc = await docRef.get();
    const data = doc.data();

    if (!data) return null;

    return data;
  }

  public override async findAll() {
    const docsRef = await this.db.get();

    if (docsRef.docs.length <= 0) return [];

    return docsRef.docs.map(doc => doc.data());
  }

  public override async update({ id, updateObjectData }: UpdateObjectDto<T>): Promise<void> {
    const docRef = this.db.doc(id);

    await docRef.update(updateObjectData);
  }

  private splitDataForBatchOps(
    objs: CreateObjectDto<T>[] | UpdateObjectDto<T>[]
  ): CreateObjectDto<T>[][] | UpdateObjectDto<T>[][] {
    const batches: CreateObjectDto<T>[][] | UpdateObjectDto<T>[][] = [];

    for (let i = 0; i < objs.length; i += this.BATCH_SIZE) {
      batches.push(objs.slice(i, i + this.BATCH_SIZE) as any);
    }

    return batches;
  }

  public async updateBatch(updateObjs: UpdateObjectDto<T>[]): Promise<void> {
    const splitBatches = this.splitDataForBatchOps(updateObjs) as UpdateObjectDto<T>[][];

    for (const splitBatch of splitBatches) {
      const batch = this.db.firestore.batch();

      splitBatch.forEach(({ id, updateObjectData }) => {
        const docRef = this.db.doc(id);

        batch.update(docRef, updateObjectData);
      });

      await batch.commit();
    }
  }

  public override async delete(id: string): Promise<void> {
    const docRef = this.db.doc(id);

    await docRef.delete();
  }
}
