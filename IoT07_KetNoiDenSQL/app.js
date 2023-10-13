const express=require('express');
const expressLayouts=require('express-ejs-layouts');

const app=express();
const port=5000;

//Khai bao thu muc public
app.use(express.static('public'));
//khai bao su dung layout
app.use(expressLayouts);
app.set('layout','./layout/full_width')
app.set('view engine','ejs')

//Thiet lap trang chu
app.get('/',(req,res)=>{
    res.render('index',{
        title:"home"
    });
});

var department=require('./models/department');
//department(app)
app.use('/department',department);


app.listen(port,()=>console.info(`web server running on ${port}`));

