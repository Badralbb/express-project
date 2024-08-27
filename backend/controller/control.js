const { sql } = require("../configs/database");

const postCategory = async (req, res) => {
  const id = uuidv4();
  const { name, color, icon } = req.body;
  await sql`insert into category(id,name,color,icon)
        values(id=${id},name=${name},color=${color},icon=${icon})`;
  res.status(201).json(["Success"]);
};
const getCategories = async (req, res) => {
  const categorires = await sql`select * from category`;
  res.send(categorires);
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
module.exports = {
  postCategory,
  getCategories,
  putCategories,
  deleteCategoires,
};
