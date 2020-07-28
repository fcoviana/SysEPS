import express from "express";
import routes from "./routes";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './config/swagger.json';

const app = express();


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(cors());
app.use(express.json());

app.use(routes);
app.listen(3000);
