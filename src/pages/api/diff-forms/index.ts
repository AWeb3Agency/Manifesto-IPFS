import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 *
 * components:
 *   diff-forms:
 *     DiffFormsResponse:
 *       type: object
 *       properties:
 *         diff-forms:
 *           type: string
 * tags:
 *   - name: diff-forms
 *     description: Compare most_recent with the latest information from Google Form API
 *
 * /diff-forms:
 *   get:
 *     description: If there are new forms called add-index.
 *     tags: [diff-forms]
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
  