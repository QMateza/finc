import express from "express";
import path from "path";

const app = express();
app.use("/img", express.static(path.join(import.meta.dirname, "img")));
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", {
    description:
      "	Explore personal and business banking with Finc. Find practical account options and digital tools to help manage your money and keep your plans moving.",
    title:
      "Home - Explore personal and business banking with Finc. Find practical account options and digital tools to help manage your money and keep your plans moving.",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    description:
      "Get to know Finc and our approach to personal and business banking. Learn how we aim to make managing money clearer and more straightforward.",
    title:
      "About - Get to know Finc and our approach to personal and business banking. Learn how we aim to make managing money clearer and more straightforward.",
  });
});

app.get("/services", (req, res) => {
  res.render("services", {
    description:
      "	Discover Finc’s personal and business banking services. Compare account options and explore tools designed to help you manage everyday banking.",
    title:
      "Services - 	Discover Finc’s personal and business banking services. Compare account options and explore tools designed to help you manage everyday banking.",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    description:
      "Contact Finc for help with personal or business banking. Find the right way to reach our team with questions about accounts and services.",
    title:
      "Contact - Contact Finc for help with personal or business banking. Find the right way to reach our team with questions about accounts and services.",
  });
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});
