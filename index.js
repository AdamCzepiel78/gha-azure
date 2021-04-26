var express = require('express');
var app = express();
const port = process.env.PORT || 3000;


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello Deutsche Bahn Welt');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  