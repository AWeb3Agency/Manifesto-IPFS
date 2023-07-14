import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 *
 * components:
 *   add-index:
 *     AddIndexResponse:
 *       type: object
 *       properties:
 *         add-index:
 *           type: string
 * tags:
 *   - name: add-index
 *     description: Add a new index in the folder
 *
 * /add-index:
 *   get:
 *     description: the server has to add a new index in the folder
 *     tags: [add-index]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Aggregate index
 *
 *
 */

interface Data {
    message: any;
  }
  
  export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ message: 'Aggregate index' })
  };
  