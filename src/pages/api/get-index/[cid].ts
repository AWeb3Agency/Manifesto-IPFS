import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 *
 * components:
 *   get-index:
 *     GetIndexResponse:
 *       type: object
 *       properties:
 *         get-index:
 *           type: string
 * tags:
 *   - name: get-index
 *     description: Endpoint to find latest index
 *
 * /get-index/{cid}:
 *   get:
 *     description: Endpoint just to let user know CID has not been passed
 *     tags: [get-index]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: CID
 *         required: true
 *         type: string
 *         description: CID of index
 *     responses:
 *       200:
 *         description: CID missing response
 *
 *
 */

interface Data {
  body: any;
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { cid } = req.query as any;
  try {
    const response = await fetch(`https://ipfs.io/ipfs/${cid}`);
    const json = await response.json();
    res.statusCode = 200;
    res.json({ body: json });  
  } catch (error) {
    res.statusCode = 404;
    res.json({ body: "CID not found!" });
  }
};
