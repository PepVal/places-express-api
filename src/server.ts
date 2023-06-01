import express, { Express, Request, Response } from 'express';

import placesController from './controllers/places.controllers';
import filesController from './controllers/files.controllers';

const app: Express = express();
const port = 3000;

app.use('/places', placesController);
app.use('/files', filesController);

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
