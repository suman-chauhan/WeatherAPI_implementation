import   express from "express";
import routes from  './routes/index.js'
import bodyParser from 'body-parser'
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

export default app;