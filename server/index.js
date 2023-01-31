const express = require("express");
const getHospitalData = require("./hospitalData.js");
const app = express();
/* eslint-disable */
const port = process.env.PORT || 1337;
/* eslint-enable */
const data = {};
const cors = require("cors");
app.use(cors());
app.get("/", async (req, res) => {
  // console.log("incoming");
  if (data["hospital"]) {
    return res.json(data);
  }
  const hospital = await getHospitalData();
  data["hospital"] = hospital;
  res.json(data);
});

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not found - ${req.originalUrl}`);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV == "development" ? err.stack : "🤯",
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`app listening at port : ${port}`));
