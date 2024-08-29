const { startApp } = require("./configs/basic");
const {
  postCategory,
  getCategories,
  putCategories,
  deleteCategoires,
  deleteAllCategoires,
} = require("./controller/control");
const app = startApp();
app.get("/categories", getCategories);
app.post("/categories", postCategory);
app.put("/categories/:id", putCategories);
app.delete("/categories/:id", deleteCategoires);
app.delete("/categories", deleteAllCategoires);
