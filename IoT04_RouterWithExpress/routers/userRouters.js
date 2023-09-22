//File userRouter.js
//Khai báo express
var express=require("express");
const routes = express.Router();

// Add routes
// routes.get('/', SessionController.store);
//localhost:3000/user/
//Lấy danh sách user 
routes.get("/",(req,res)=>{
    res.send("<h1>Trang user list</h1>")
});
// routes.get('/', SessionController.store);
//localhost:3000/user/ID/5
//Lấy user theo ID
routes.get("/ID/:id",(req,res)=>{
    res.send("<h1>Trang user ID</h1> "+req.params.id)
});
// routes.post('/', SessionController.store);
//thêm
//localhost:3000/user/create
routes.post("/create",(req,res)=>{
    res.send("<h1>Trang  thêm user</h1> ")
});
// routes.put('/', SessionController.store);
//update
//1 get theo id
//localhost:3000/user/edit/5
routes.get("/edit/:id",(req,res)=>{
    res.send("<h1>Trang  lấy user để sửa</h1> ")
});
//2. put sửa
//localhost:3000/user/edit
routes.put("/edit",(req,res)=>{
    res.send("<h1>Trang put user </h1> ")
});
// routes.delete('/', SessionController.store);
//1. lây id cân xoa
//localhost:3000/user/delete/5
routes.get("/delete/:id",(req,res)=>{
    res.send("<h1>Trang  lấy user để Xóa</h1> ")
});
//2. xoa user
//localhost:3000/user/delete
routes.delete("/delete",(req,res)=>{
    res.send("<h1>Trang xóa user </h1> ")
});


module.exports = routes;
