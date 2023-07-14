import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 *
 * components:
 *   get-all-indexes:
 *     GetAllIndexesResponse:
 *       type: object
 *       properties:
 *         get-all-indexes:
 *           type: string
 * tags:
 *   - name: get-all-indexes
 *     description: Obtain all depersonalized indexes
 *
 * /get-all-indexes:
 *   get:
 *     description: Depersonalized indexes found
 *     tags: [get-all-indexes]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Depersonalized indexes found
 *
 *
 */

interface Data {
    message: any;
  }
  
  export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ message: 'Depersonalized indexes found' })
  };
  