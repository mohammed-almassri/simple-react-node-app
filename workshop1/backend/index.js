const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const students = [
  {
    name: "Alice",
    email: "alice@miu.edu",
    id: "S100"
  },
  {
    name: "Bob",
    email: "bob@miu.edu",
    id: "S101"
  },
  {
    name: "Carol",
    email: "carol@miu.edu",
    id: "S102"
  },
  {
    name: "David",
    email: "david@miu.edu",
    id: "S103"
  },
  {
    name: "Eve",
    email: "eve@miu.edu",
    id: "S104"
  },
  {
    name: "Frank",
    email: "frank@miu.edu",
    id: "S105"
  },
  {
    name: "Grace",
    email: "grace@miu.edu",
    id: "S106"
  },
  {
    name: "Hank",
    email: "hank@miu.edu",
    id: "S107"
  },
  {
    name: "Ivy",
    email: "ivy@miu.edu",
    id: "S108"
  },
  {
    name: "Jack",
    email: "jack@miu.edu",
    id: "S109"
  }
];

app.get('/students', async (req, res) => {
  res.send(students);
});


const port = 5000;
app.listen(port, () => console.log(`Listening on ${port}`));