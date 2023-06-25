import { INft, INftTrait } from "@/types";
import { OpenSeaAsset } from "opensea-js/lib/types";

export const mapNft = (nft: OpenSeaAsset): INft => {
  return {
    name: nft.name,
    description: nft.description,
    imageUrl: nft.imageUrl,
    numSales: nft.numSales,
    openseaLink: nft.openseaLink,
    tokenId: nft.tokenId || null,
    traits: nft.traits.map(trait => mapNftTrait(trait))
  };
};

const mapNftTrait = (trait: any): INftTrait => {
  return {
    traitType: trait.trait_type,
    value: trait.value,
    traitCount: trait.trait_count
  };
};
