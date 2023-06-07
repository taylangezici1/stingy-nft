// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { OpenseaService } from "@/services";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const service = new OpenseaService();

  const data = await service.getCollectionRes("kaiju-kingz");
  console.log(JSON.stringify(data));
  res.status(200).json({ data });
}
