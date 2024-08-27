const { startApp } = require("./configs/basic");
const { sql } = require("./configs/database");
const { v4: uuidv4 } = require('uuid');
const app = startApp();
app.get("/categories", async (req, res) => {
  const categorires = await sql`select * from category`;
  res.send(categorires);
});
app.post("/categories", async(req, res)=>{
    const id = uuidv4()
    const {name, color,icon} = req.body
    await sql`insert into category(id,name,color,icon)
    values(id=${id},name=${name},color=${color},icon=${icon})`
    res.status(201).send("Success")
})
