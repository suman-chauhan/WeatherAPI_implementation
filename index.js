import express from "express";
import mongoose from "mongoose";
import {CONNECTION_URL } from "./config/index.js";
 import routes from  './routes/index.js'
 import bodyParser from 'body-parser'
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

// connection to database
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on http://localhot:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));