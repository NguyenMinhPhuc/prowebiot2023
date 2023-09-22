//File userRouter.js
//Khai báo express
var express=require("express");
const routes = express.Router();

// Add routes
// routes.get('/', SessionController.store);
//localhost:3000/user/
routes.get("/",(req,res)=>{
    res.send("<h1>Trang product list</h1>")
});
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
