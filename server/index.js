const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const app = express();

const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('this-or-that backend')
})

app.get('/questions/:id', function(req, res) {
  const dataFile = "./data.json";
  const id = req.params.id;
  fs.readFile(dataFile, 'utf-8').then(data => {
    arr = JSON.parse(data);
    res.send(arr[id - 1]);
  }).catch(err => {
    console.log(err);
  })
});

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
