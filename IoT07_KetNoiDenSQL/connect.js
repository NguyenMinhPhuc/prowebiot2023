var sql =require('mssql/msnodesqlv8')
//Cấu hình chuỗi kết nối
var config={
    server:"118.69.126.49",
    user:"userData_WebIoTCoures",
    password:"123456789",
    database:"Data_WebIotCourse",
    driver:"msnodesqlv8",
};

//khai báo đối tượng kết nối
const conn=new sql.ConnectionPool(config)
    .connect()
    .then((pool)=>{
        return pool;
    });
//exports thong tin ket noi
module.exports={
    conn:conn,
    sql:sql,
};