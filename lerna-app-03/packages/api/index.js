const express = require("express");
const { greet } = require("@monorepos/shared");

const app = express();

app.get("/", (req, res) => {
  res.send(greet("Benson"));
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
