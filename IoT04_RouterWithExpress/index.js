//Khai bao
var express=require("express");
var app=express();

app.get("/",function(req,res){
    res.send("<h1>Index</h1>");
})

//Khai báo sử dụng file userRouters.js
var userRouters=require("./routers/userRouters");
var productRouters=require("./routers/productRouters");
//Sử dụng biến đã khai báo
app.use('/user',userRouters);
app.use('/product',productRouters)

//Gọi web server tại port 3000
app.listen(3000)
