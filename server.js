const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.post('/', (req, res) => res.sendStatus(200))
app.listen(port)

// app.get('/', (req, res) => {
//   res.json({
//     message: 'OK'
//   })
// })

// app.get('*', (req, res) => {
//   res.json({
//     message: 'Error'
//   })
// })

// app.listen(PORT, () => {
//   console.log(`Server is listening on ${PORT}`)
// })
