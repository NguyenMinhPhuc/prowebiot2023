view engine

*.html

nodejs - EJS

<html>

</html>

# 1.Cài đặt
```nodejs
npm install ejs
```
# 2. khai báo sử dụng view engine ejs trong file index.js hoặc app.js

```javaScript
var express=require("express");
var app=express();
const port =3000;

app.set("View engine","ejs");
app.set("views","./views");

//Mo file home.ejs
app.get("/",(req,res)=>{
    res.render("home.ejs")
});

app.listen(port,()=>{
    console.log(`project dang chay o port ${port}`)
})
```
1. sử dụng if trong ejs
```javascript
<% if (day=='thứ bảy')|| day=='chủ nhat'>{%>
<h3>Hôm nay là cuối tuần</h3>
<%} else {%>
<h3>Hôm nay la ngày <%=day%> </h3>
<%}%>
```


