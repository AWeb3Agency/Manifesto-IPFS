import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 *
 * components:
 *   import:
 *     ImportResponse:
 *       type: object
 *       properties:
 *         import:
 *           type: string
 * tags:
 *   - name: import
 *     description: Record all import actions in the log file
 *
 * /import:
 *   get:
 *     description: All import actions in the log file (logs) found
 *     tags: [import]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: All import actions in the log file (logs) found
 *
 *
 */

interface Data {
    message: any;
  }
  
  export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ message: 'all import actions found in the log file (in logs)!' })
  };
  