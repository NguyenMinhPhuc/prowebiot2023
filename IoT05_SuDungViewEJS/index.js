var express=require("express");
var app=express();
const port =3000;

app.set("View engine","ejs");
app.set("views","./views");

app.use(express.static('publics'));

//Mo file home.ejs
app.get("/",(req,res)=>{
    res.render("home.ejs")
});

app.get("/chao",(req,res)=>{
    var persons=[
        {fullname:'nguyen Van A',age:35},
        {fullname:'nguyen Van b',age:36},
        {fullname:'nguyen Van c',age:37},
    ]
    res.render("xinchao.ejs",{
        title:"Hello World",
        name:"Nguyễn Minh Phúc",
        persons:persons
    });
});

app.listen(port,()=>{
    console.log(`project dang chay o port ${port}`)
})