import { IOpenseaAccount } from "./IAccount";

export interface INft {
  name: string;
  description: string;
  imageUrl: string;
  numSales: number;
  openseaLink: string;
  tokenId: string | null;
  traits: INftTrait[];
  owner?: IOpenseaAccount;
}

export interface INftTrait {
  traitType: string;
  value: string;
  traitCount: number;
}
