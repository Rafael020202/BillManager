import express from 'express';
import routes from './routes';

import '../typeorm';

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log('😎😎 server up and running on port 3333');
});

