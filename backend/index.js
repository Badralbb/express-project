const { startApp } = require("./configs/basic");
const {
  postCategory,
  getCategories,
  putCategories,
  deleteCategoires,
} = require("./controller/control");
const app = startApp();
app.get("/categories", getCategories);
app.post("/categories", postCategory);
app.put("/categories/:id", putCategories);
app.delete("/categories/:id", deleteCategoires);
