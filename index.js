import "dotenv/config";
import express from "express";
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.use(express.static("public"));

// DINOIPSUM API
app.get("/dinosaur", async (req, res) => {
  await fetch("https://dinoipsum.com/api/?format=json&words=2&paragraphs=1")
    .then((response) => response.json())
    .then((data) => res.send(data));
});

// UNSPLASH API
app.get("/image", async (req, res) => {
  await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.CLIENT_ID}&query=flower`
  )
    .then((response) => response.json())
    .then((data) => res.send(data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
