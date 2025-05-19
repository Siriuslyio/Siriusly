const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create donor
app.post("/api/donors", async (req, res) => {
  const { name, email, amount } = req.body;
  const donor = await prisma.donor.create({
    data: {
      name,
      email,
      balance: parseFloat(amount),
    },
  });
  res.json(donor);
});

// Get donor
app.get("/api/donors/:id", async (req, res) => {
  const donor = await prisma.donor.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  if (!donor) return res.status(404).send("Not found");
  res.json(donor);
});

// Submit project idea
app.post("/api/ideas", async (req, res) => {
  const { donorId, idea } = req.body;
  const newIdea = await prisma.projectIdea.create({
    data: {
      idea,
      donorId: parseInt(donorId),
    },
  });
  res.json(newIdea);
});

// Vote on idea
app.post("/api/ideas/:id/vote", async (req, res) => {
  const { donorId } = req.body;
  const ideaId = parseInt(req.params.id);
  const vote = await prisma.vote.create({
    data: {
      donorId: parseInt(donorId),
      ideaId,
    },
  });
  res.json(vote);
});

// Get all projects
app.get("/api/projects", async (req, res) => {
  const projects = await prisma.project.findMany();
  res.json(projects);
});

// Create new project
app.post("/api/projects", async (req, res) => {
  const { name, goal, spent } = req.body;
  const project = await prisma.project.create({
    data: {
      name,
      goal,
      spent,
    },
  });
  res.json(project);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
