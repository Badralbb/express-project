const express = require("express");
const app = express();
const port = 4000;

const startApp = () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
module.exports = {
    startApp,
}