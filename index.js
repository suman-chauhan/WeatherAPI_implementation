import mongoose from "mongoose";
import {CONNECTION_URL } from "./config/index.js";
import app from "./app.js";
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


