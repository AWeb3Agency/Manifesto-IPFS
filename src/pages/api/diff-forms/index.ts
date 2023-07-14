import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 *
 * components:
 *   diff-froms:
 *     DiffFromsResponse:
 *       type: object
 *       properties:
 *         diff-froms:
 *           type: string
 * tags:
 *   - name: diff-froms
 *     description: Compare most_recent with the latest information from Google From API
 *
 * /diff-froms:
 *   get:
 *     description: If there are new froms called add-index.
 *     tags: [diff-froms]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: More updated Google API information from found!
 *
 *
 */

interface Data {
    message: any;
  }
  
  export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ message: 'Google API Update!' })
  };
  