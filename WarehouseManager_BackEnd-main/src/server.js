// import express module
import express, { json } from "express";
import * as dotenv from "dotenv";
import {
  ProductRouter,
  AccountRouter,
  CustomerRouter,
  InOrderRouter,
  OutOrderRouter,
  SupplierRouter,
  LoginRouter,
  LogoutRouter,
} from "./routes/index.js";
import connectDB from "./config/database.js";
import cors from "cors";
import { verifyAccessToken } from "./jwt_helper.js";
// Thực thi cấu hình ứng dụng sử dụng file .env
dotenv.config();
// Tạo đối tượng app để khởi tạo web container
const app = express();
app.use(json());
app.use(express.json());

app.use(cors());
// Cấu hình hoạt động routing (định tuyến) các request gửi tới web server
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/products", ProductRouter);
app.use("/accounts", AccountRouter);
app.use("/customers", CustomerRouter);
app.use("/in", InOrderRouter);
app.use("/out", OutOrderRouter);
app.use("/suppliers", SupplierRouter);
app.use("/login", LoginRouter);
app.use("/logout", LogoutRouter);
// Khai báo port cho ứng dụng web
const port = process.env.PORT || 8080;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.REACT_URL);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.listen(port, async () => {
  connectDB();
  console.log(`Server is running on: http://localhost:${port}`);
});
