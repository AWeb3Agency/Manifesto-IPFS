import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 *
 * components:
 *   get-froms:
 *     GetFromsResponse:
 *       type: object
 *       properties:
 *         get-froms:
 *           type: string
 * tags:
 *   - name: get-froms
 *     description: End point to obtain the list of all forms
 *
 * /get-froms/{cid}:
 *   get:
 *     description: Endpoint just to let user know CID has not been passed
 *     tags: [get-froms]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: CID
 *         required: true
 *         type: string
 *         description: CID list of froms
 *     responses:
 *       200:
 *         description: CID missing response
 *
 *
 */

interface Data {
  cid: string;
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { cid } = req.query as any;
  res.statusCode = 200;
  res.json({ cid });
};
