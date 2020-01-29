import { Router } from 'express';
import User from './app/models/Users';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Vinicius Martins',
    email: 'vini.martinslol@gmail.com',
    password_hash: '515444664',
  });
  return res.json(user);
});

export default routes;
