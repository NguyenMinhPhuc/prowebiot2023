//Import express
const express = require('express')
//Khai bao
const app = express()
//kb port
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
