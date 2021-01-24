/**
 * PWA Pilipinas
 * 2020
 * 
 * All Rights Reserved
 */
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

const isbot = require('isbot')

const appTitle = 'stest';

const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use((req: any, res: any, next: any) => {
    if(isbot(req.get('User-Agent'))) {
        // BOTS
        app.get('/', (req, res) => {
            res.json({ua: req.get('User-Agent')});
        });
        app.get('/id/:id', (req, res) => {
            res.json({id: req.params.id, ua: req.get('User-Agent')});
        });
    }  else {
        // @ts-ignore
        app.use('/', express.static('src/dist'));
    }
    next();
});





exports[appTitle] = functions.https.onRequest(app);