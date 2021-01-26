/**
 * PWA Pilipinas
 * 2020
 * 
 * All Rights Reserved
 */
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

// const isbot = require('isbot')

const appTitle = 'stest';

const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(require('prerender-node'));

//@ts-ignore
app.use('/', express.static('src/dist'));

exports[appTitle] = functions.https.onRequest(app);