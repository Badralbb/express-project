const { startApp } = require("./configs/basic");
const {
  postCategory,
  getCategories,
  putCategories,
  deleteCategoires,
  deleteAllCategoires,
  getTransaction,
  postTransaction,
  getOneCategory,
  putTransactions,
} = require("./controller/control");
const app = startApp();
app.get("/categories", getCategories);
app.post("/categories", postCategory);
app.put("/categories/:id", putCategories);
app.delete("/categories/:id", deleteCategoires);
app.delete("/categories", deleteAllCategoires);
app.get("/categories/:id", getOneCategory);
// transaction CRUD
app.get("/transactions", getTransaction);

app.post("/transactions", postTransaction);
