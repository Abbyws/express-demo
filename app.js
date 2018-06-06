const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('王硕 3117370084  试试看阿~~')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})