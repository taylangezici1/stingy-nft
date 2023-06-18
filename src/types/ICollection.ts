export interface INftCollection {
  name: string;
  slug: string;
  imageUrl: string;
  wikiUrl?: string;
  externalUrl?: string;
  description: string;
  traits: {
    [key: string]: ITrait;
  };
  totalSupply: number;
  averagePrice: number;
  floorPrice: number;
  numOwners: number;
  marketCap: number;
  contractAddress: string;
  twitterUsername?: string;
  instagramUsername?: string;
  discordUrl?: string;
  sellerFee: number;
  isCreatorFeeEnforced: boolean;
}

export interface INftCollectionRes {
  primaryAssetContracts: { address: string }[];
  twitterUsername?: string;
  instagramUsername?: string;
  discordUrl?: string;
  wikiUrl?: string;
  fees: {
    sellerFees: { [key: string]: number };
    openseaFees: { [key: string]: number };
  };
  isCreatorFeeEnforced: boolean;
  createdDate?: string;
  traits: {
    [key: string]: ITrait;
  };
}

interface ITrait {
  [key: string]: number;
}
