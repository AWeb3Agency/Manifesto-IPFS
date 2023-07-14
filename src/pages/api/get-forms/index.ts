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
 *     description: Get list of all depersonalized froms
 *
 * /get-froms:
 *   get:
 *     description: 
 *     tags: [get-froms]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: the list of all the depersonalized froms found in the folder
 *
 */

interface Data {
  message: any;
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ message: 'the list of all the depersonalized froms found in the folder!' })
};
