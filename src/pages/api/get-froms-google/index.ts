import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 *
 * components:
 *   get-forms-google:
 *     GetFromsGoogleResponse:
 *       type: object
 *       properties:
 *         get-forms-google:
 *           type: string
 * tags:
 *   - name: get-forms-google
 *     description: Get the latest info via Google API from
 *
 * /get-forms-google:
 *   get:
 *     description: 
 *     tags: [get-forms-google]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: All information obtained from Google API's from
 *
 *
 */

interface Data {
    message: any;
  }
  
  export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ message: 'All information obtained from Google APIS from' })
  };
  