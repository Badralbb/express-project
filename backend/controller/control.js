const { sql } = require("../configs/database");
const { v4: uuidv4 } = require("uuid");
const postCategory = async (req, res) => {
  const id = uuidv4();
  const { name, color, icon } = req.body;
  await sql`insert into category(id,name,color,icon)
        values(${id},${name},${color},${icon})`;
  res.status(201).json(["Success"]);
};
const getCategories = async (req, res) => {
  const categorires = await sql`select * from category`;
  res.json(categorires);
};
const putCategories = async (req, res) => {
  const { id } = req.params;
  const { updatedName, color, icon } = req.body;
  await sql`update category set name = ${updatedName}, color = ${color}, icon = ${icon}
    where id = ${id}`;
  res.status(202).send("Success");
};
const deleteCategoires = async (req, res) => {
  const { id } = req.params;
  await sql`delete from category where id = ${id}`;
  res.status(204).send("Success");
};
const deleteAllCategoires = async (req, res) => {
  await sql`delete from category *`;
  res.status(204).send("Success");
};

const getTransaction = async (req, res) => {
  const transaction =
    await sql`select transaction.amount,transaction.type,category.name,category.icon,transaction.date from transaction left join category on
  transaction.categoryId = category.id`;
  res.json(transaction);
};
const postTransaction = async (req, res) => {
  const { amount, categoryId, amountType, payee, note } = req.body;
  const id = uuidv4();
  await sql`insert into transaction values(${id},${amount},${categoryId},${amountType},current_date,${payee},${note})`;
  res.status(201).json(["Success"]);
};

const putTransactions = async (req, res) => {
  const { id } = req.params;
  const { amount, categoryIcon, updatedName } = req.body;

  res.status(202).send("Success");
};
const getOneCategory = async (req, res) => {
  const { id } = req.params;
  const category = await sql`select * from category where id=${id}`;
  res.json(category);
};
module.exports = {
  postCategory,
  getCategories,
  putCategories,
  deleteCategoires,
  deleteAllCategoires,
  getTransaction,
  postTransaction,
  getOneCategory,
};
