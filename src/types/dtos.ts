import { UpdateData } from "firebase-admin/firestore";

export type CreateObjectDto<T> = { id?: string } & Partial<T>;

export type UpdateObjectDto<T> = {
  id: string;
  updateObjectData: UpdateData<T>;
};
