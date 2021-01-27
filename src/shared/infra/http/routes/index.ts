import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json( { isWorking: true } );
});

export default routes;