import { INftCollection, INftCollectionRes } from "@/types";
import { OpenSeaCollection } from "opensea-js/lib/types";

export const mapNftCollection = (
  collection: OpenSeaCollection,
  collectionRes: INftCollectionRes
): INftCollection => {
  return {
    name: collection.name,
    slug: collection.slug,
    imageUrl: collection.imageUrl,
    wikiUrl: collection.wikiLink,
    externalUrl: collection.externalLink,
    description: collection.description,
    traits: collectionRes.traits, //TODO: map this
    totalSupply: collection.stats.total_supply,
    averagePrice: collection.stats.average_price,
    floorPrice: collection.stats.floor_price,
    numOwners: collection.stats.num_owners,
    marketCap: collection.stats.market_cap,
    contractAddress: collectionRes.primaryAssetContracts[0].address,
    twitterUsername: collectionRes.twitterUsername,
    instagramUsername: collectionRes.instagramUsername,
    discordUrl: collectionRes.discordUrl,
    sellerFee: Object.values(collectionRes.fees.sellerFees)[0] / 100,
    isCreatorFeeEnforced: collectionRes.isCreatorFeeEnforced
  };
};
