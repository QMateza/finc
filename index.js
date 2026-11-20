import express from "express";
import path from "path";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", { description: "Hello world" });
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});
