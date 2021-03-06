import "reflect-metadata";
import express from 'express';
import cors from 'cors';

import "./database";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333, () => console.log("Server is running"));