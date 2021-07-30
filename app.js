const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// this is get request method
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to express server" });
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
