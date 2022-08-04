const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const app = express();

const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('this-or-that backend')
})

app.get('/questions/:id', function(req, res) {
  const dataFile = "./data.json";
  const id = req.params.id;
  fs.readFile(dataFile, 'utf-8').then(data => {
    arr = JSON.parse(data);
    if (id > arr.length) {  // i.e. all images have been displayed
      const err =  "No more questions left.";
      res.send([err, arr.length]);
      throw err;
    }
    res.send([arr[id - 1], arr.length]);
  }).catch(err => {
    console.log(err);
  })
});

app.post('/post/:id', function(req, res) {
  const dataFile = "./data.json";
  const id = req.params.id - 1;
  fs.readFile(dataFile, 'utf-8')
    .then(data => {
      const obj = JSON.parse(data);
      obj[id] = req.body;
      return obj;
    })
    .then(obj => {
      fs.writeFile(dataFile, JSON.stringify(obj), err => {
        if (err) {
          console.error(err);
          res.send("Error updating JSON.");
        }
      })
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    })
});

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
