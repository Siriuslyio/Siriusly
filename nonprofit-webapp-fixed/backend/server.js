const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let donors = {};
let projects = {};
let votes = {};
let projectIdeas = {};

app.post("/api/donors", (req, res) => {
  const { name, email, amount } = req.body;
  const id = uuidv4();
  donors[id] = { id, name, email, balance: parseFloat(amount), votes: [] };
  return res.json(donors[id]);
});

app.get("/api/donors/:id", (req, res) => {
  const donor = donors[req.params.id];
  if (!donor) return res.status(404).send("Donor not found");
  return res.json(donor);
});

app.get("/api/projects", (req, res) => {
  return res.json(Object.values(projects));
});

app.post("/api/ideas", (req, res) => {
  const { donorId, idea } = req.body;
  const id = uuidv4();
  projectIdeas[id] = { id, donorId, idea, votes: 0 };
  return res.json(projectIdeas[id]);
});

app.post("/api/ideas/:id/vote", (req, res) => {
  const { donorId } = req.body;
  const idea = projectIdeas[req.params.id];
  const donor = donors[donorId];
  if (!idea || !donor) return res.status(404).send("Invalid ID");
  if (donor.votes.includes(req.params.id)) return res.status(400).send("Already voted");
  idea.votes++;
  donor.votes.push(req.params.id);
  return res.json(idea);
});

app.post("/api/projects", (req, res) => {
  const { name, goal, spent } = req.body;
  const id = uuidv4();
  projects[id] = { id, name, goal, spent: spent || 0 };
  return res.json(projects[id]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
