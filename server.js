const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

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

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');

});
