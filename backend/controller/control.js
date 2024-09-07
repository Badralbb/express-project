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
  const { date } = req.query;
  const today = new Date();
  let transaction =
    await sql`select transaction.date,transaction.amount,transaction.type,category.name,transaction.id,category.icon,transaction.time,category.color from transaction left join category on
  transaction.categoryId = category.id order by date`;
  transaction = transaction.filter(
    (transaction) => today.getDate() - transaction.date.getDate() <= date
  );

  res.json(transaction);
};
// const getTransaction = async (req, res) => {
//   const { date } = req.query;
//   let transaction = await sql`select * from transaction where true`;
//   if (date) {
//     transaction = await `${query} and date = ${date}`;
//   }
//   res.json(transaction);
// };
const postTransaction = async (req, res) => {
  const input = req.body;
  input.id = uuidv4();

  await sql`insert into transaction ${sql(input, Object.keys(input))}`;
  res.status(201).json(["Success"]);
};

// const putTransactions = async (req, res) => {
//   const { id } = req.params;
//   await sql`update transaction set where id=${id}`;
//   res.status(202).send("Success");
// };
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
