// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { OpenseaService } from "@/services";
import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
import { OpenSeaSDK, Chain } from "opensea-js";
import { MongoService } from "@/services/mongo/mongoService";
import { INftCollection } from "@/types";
import { MongoCollectionService } from "@/services/mongo/mongoCollectionService";
import { MongoNftCollectionsService } from "@/services/mongo/nftCollections/mongoNftCollectionsService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mongoService = new MongoNftCollectionsService();
  const openseaService = new OpenseaService();
  const collection = await openseaService.getCollection("proof-moonbirds");
  await mongoService.createOne(collection);

  await openseaService.fetchNfts(collection);
  res.status(200).json({ data: "anan" });
}
