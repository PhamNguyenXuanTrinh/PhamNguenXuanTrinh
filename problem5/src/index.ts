import express, { Application, Request, Response, NextFunction } from 'express';
import connectDb from './db/connectDB';
import dotenv from 'dotenv';
import initRouters from './routers';


dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to database
connectDb();

initRouters(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
