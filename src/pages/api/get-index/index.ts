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
 * /get-index:
 *   get:
 *     description: Endpoint just to let user know CID has not been passed
 *     tags: [get-index]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: CID missing response
 *
 */

interface Data {
  message: any;
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ message: 'Missing Param CID!' })
};
