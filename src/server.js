// require('dotenv').config()
// const express = require('express'); // commonjs
// const path = require('path'); // commonjs
// const configViewEngine = require('./config/viewEngine');
// const webRoute = require('./routes/web');
// const connection = require('./config/database');

// // console.log(">>> chech env: ", process.env); // es modules

// const app = express(); // app express
// const apiRoutes = require('./routes/api');

// // const port = 8080; // port => hardcode
// // const port = process.env.PORT || 8082;
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // config req.body
// app.use(express.json()) // for json
// app.use('/api', apiRoutes);
// app.use(express.urlencoded({ extended: true })) // for form data

// // config template engine
// configViewEngine(app);

// // Khai báo route
// app.use('/',webRoute);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


////333333

require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const apiRoutes = require('./routes/api');
const cors = require('cors'); // Thêm dòng này

const app = express(); // Khởi tạo ứng dụng Express
app.use(cors()); // Thêm dòng này

// Sử dụng PORT từ biến môi trường hoặc mặc định là 3001
const PORT = process.env.PORT || 3001;


// Config middleware để xử lý JSON và form data
app.use(express.json()); // Xử lý dữ liệu JSONnp
app.use(express.urlencoded({ extended: true })); // Xử lý dữ liệu từ form

// Cấu hình để phục vụ file tĩnh từ thư mục public
app.use('/images', express.static(path.join(__dirname, 'src/public/images')));

// Config các route
app.use('/api', apiRoutes); // Định tuyến cho các API
app.use('/', webRoute); // Định tuyến cho các route web

// Config template engine
configViewEngine(app);

// Khởi động server trên PORT đã cấu hình
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

