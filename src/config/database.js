require('dotenv').config()
const mysql = require('mysql2/promise');

// Create the connection to database
// test connection docker
// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, // default: 3306
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER, // default: empty
//     password: process.env.DB_PASSWORD,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
    // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    // idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    // enableKeepAlive: true,
    // keepAliveInitialDelay: 0,

  // });

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, // default: 3306
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER, // default: empty
//     password: process.env.DB_PASSWORD
    
//   });
  
  // test connection phpmysql xampp
  const connection = mysql.createPool({
    host: process.env.XAMPP_HOST,
    user: process.env.XAMPP_USER || 'root', // Nếu XAMPP_USER không có trong .env, mặc định là 'root'
    password: process.env.XAMPP_PASSWORD || '', // Nếu XAMPP_PASSWORD không có trong .env, mặc định là rỗng
    database: process.env.XAMPP_NAME,
    // user: process.env.XAMPP_USER, // default: empty
    // password: '123456' // default: empty 
    // Để cài mật khẩu ta tìm file xampp\phpMyAdmin và đổi 
    // >> $cfg['Servers'][$i]['auth_type'] = 'config'; <<
    //  thành 
    // >> $cfg['Servers'][$i]['auth_type'] = 'http'; <<
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
    
  });

  // Kiểm tra kết nối
  connection.getConnection()
  .then(() => console.log('Kết nối cơ sở dữ liệu thành công'))
  .catch(err => console.error('Lỗi kết nối cơ sở dữ liệu:', err));

module.exports = connection;

