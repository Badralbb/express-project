const { startApp } = require("./configs/basic");
const {
  postCategory,
  getCategories,
  putCategories,
  deleteCategoires,
  deleteAllCategoires,
  getTransaction,
  postTransaction,
} = require("./controller/control");
const app = startApp();
app.get("/categories", getCategories);
app.post("/categories", postCategory);
app.put("/categories/:id", putCategories);
app.delete("/categories/:id", deleteCategoires);
app.delete("/categories", deleteAllCategoires);
// transaction CRUD
app.get("/transactions", getTransaction)

app.post("/transactions", postTransaction)
