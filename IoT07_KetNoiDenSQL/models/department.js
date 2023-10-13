var express =require('express');
var router=express.Router();

var {conn, sql}=require("../connect");

//thuc hien 4 thao tac
//1. select data : select All, select theo ID
router.get("/",async (req,res)=>{
    var pool=await conn;
    var sqlString="Select * from department";
    return await pool.request()
    .query(sqlString,function(err,data){
        res.render("department/index",{
            title:"department list",
            departments:data.recordset,
        });
    });
});

module.exports=router;