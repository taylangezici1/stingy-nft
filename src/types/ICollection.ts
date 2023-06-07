export interface ICollectionDb {
  name: string;
  slug: string;
  imageUrl: string;
  twitterUsername: string;
  instagramUsername: string;
  discordUrl: string;
  wikiUrl: string;
  externalUrl: string;
  description: string;
  primaryAssetContracts: IPrimaryAssetContract[];
  traits: {
    [key: string]: ITrait;
  };
  stats: {
    totalSupply: number;
    averagePrice: number;
    floorPrice: number;
    numOwners: number;
    marketCap: number;
  };
  fees: {
    sellerFees: { [key: string]: number };
    openseaFees: { [key: string]: number };
  };
}

interface ITrait {
  [key: string]: number;
}

export interface IPrimaryAssetContract {
  address: string;
}

export interface ICollection {}
