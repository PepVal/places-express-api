import express, { Express, Request, Response } from 'express';

import placesController from './places.controllers';

const app: Express = express();
const port = 8002;

app.use('/places', placesController);

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
