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
 
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});
