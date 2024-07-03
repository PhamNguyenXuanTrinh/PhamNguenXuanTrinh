import { Application } from 'express';
import bookRouter from './book';


const initRouters = (app: Application) => {
  app.use("/api/book", bookRouter);
};

export default initRouters;