const { startApp } = require("./services/basic")

const app = startApp()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

