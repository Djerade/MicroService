const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('coucou je suis ton serveur web')
})

app.listen(port, () => {
  console.log(`localhost${port}`)
})