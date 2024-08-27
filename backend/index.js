const { startApp } = require("./configs/basic");

const app = startApp();
app.get("/categorires", (req, res) => {
  res.send("Hello World!");
});
