//import
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 5000;

//Khai báo thư mục dùng chung
app.use(express.static("public"));
//Khai  báo sử dụng layout
app.use(expressLayouts);
app.set("layout", "./layouts/full_width");
app.set("view engine", "ejs");

//goi file theo router
app.get("/", (req, res) => {
  res.render("index", { title: "Trang chu" });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Gioi thieu",
    layout: "./layouts/side_bar",
  });
});
//goi ham listen de lang nghe
app.listen(port, () => console.info(`App listerning on port ${port}`));
