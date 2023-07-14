require('dotenv').config()
import { NextApiRequest, NextApiResponse } from "next";
const fs = require('fs').promises;
const process = require('process');
const path = require('path');
const google = require('@googleapis/forms');
const {authenticate} = require('@google-cloud/local-auth');

/**
 * @swagger
 *
 * components:
 *   get-froms-google:
 *     GetFromsGoogleResponse:
 *       type: object
 *       properties:
 *         get-froms-google:
 *           type: string
 * tags:
 *   - name: get-froms-google
 *     description: Get the latest info via Google API from
 *
 * /get-froms-google:
 *   get:
 *     description: 
 *     tags: [get-froms-google]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: All information obtained from Google API's from
 *
 *
 */

interface Data {
  body: any;
}

const formID = process.env.GOOGLE_FORM_ID;

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/forms.body.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function listMajors(auth) {
  
  const forms = google.forms({
    version: 'v1',
    auth: auth,
  });
  const response = await forms.forms.get({formId: formID});

  return response;
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    let data = await authorize().then(listMajors).catch(console.error);
    if (!data) throw "Error server!"

    res.statusCode = 200;
    res.json({ body: data });  
  } catch (error) {
    res.statusCode = 500;
    res.json({ body: error });
  }
};

// #1 buscar la documentacion de google forms api 
// #2 entender que es lo que nos falta y pedir lo que falta a RAFA de cafe claro (email)
// #3 extaer la info del formulario que nos mandaron https://docs.google.com/forms/d/1uIU2oUa0o_fzsbAKAXe1mLIVZ_lOvTlWU1CoLujnspM/edit
// #4 implementar el codigo en el api 