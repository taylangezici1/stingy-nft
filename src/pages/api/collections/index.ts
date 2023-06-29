import { MongoNftCollectionsService } from "@/services/mongo/nftCollections/mongoNftCollectionsService";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mongoNftCollectionService = new MongoNftCollectionsService();

  if (req.method === "GET") {
    return mongoNftCollectionService
      .findAll()
      .then((collections) => {
        res.status(200).json({ collections });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  } else {
    // Handle any other HTTP method
  }
}
