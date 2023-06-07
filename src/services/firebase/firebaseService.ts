import { CollectionReference } from "@google-cloud/firestore";
import { Firestore } from "firebase-admin/firestore";
import { CreateObjectDto, UpdateObjectDto } from "@/types";
import admin from "firebase-admin";
import { cert } from "firebase-admin/app";

export abstract class FirebaseService<T> {
  protected firestore: Firestore;
  protected readonly db: CollectionReference<T>;

  constructor(protected collectionPath: string) {
    this.firestore = admin.apps.length
      ? admin.apps[0]!.firestore()
      : admin
          .initializeApp(
            {
              credential: cert({
                projectId: process.env.FIREBASE_ADMIN_SDK_PROJECT_ID,
                clientEmail: process.env.FIREBASE_ADMIN_SDK_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_ADMIN_SDK_PRIVATE_KEY
              }),
              databaseURL: process.env.FIREBASE_DATABASE_URL
            },
            "firebase-admin"
          )
          .firestore();

    this.db = this.getDb(collectionPath);
  }

  protected getDb(collectionPath: string): CollectionReference<T> {
    return this.firestore.collection(collectionPath) as CollectionReference<T>;
  }

  protected generateRandomId = (length: number): string => {
    const alphaNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890";

    let chars = alphaNum;

    let id = "";

    for (let i = 0; i < length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  public abstract findOne(id: string): Promise<T | null>;
  public abstract findAll(): Promise<T[]>;
  public abstract create(createObj: CreateObjectDto<T>): Promise<string>;
  public abstract createBatch(createObjs: CreateObjectDto<T>[]): Promise<string[]>;
  public abstract delete(id: string): Promise<void>;
  public abstract update(updateObj: UpdateObjectDto<T>): Promise<void>;
  public abstract updateBatch(updateObjs: UpdateObjectDto<T>[]): Promise<void>;
}
