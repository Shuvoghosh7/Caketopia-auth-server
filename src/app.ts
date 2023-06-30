import express, { Application, Request, Response } from "express";
import routes from './app/routes';
import cookieParser from 'cookie-parser';
const app: Application = express();
import cors from "cors";


app.use(cors());
app.use(cookieParser());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World ts!");
});

export default app;
