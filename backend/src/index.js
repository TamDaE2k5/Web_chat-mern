import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./resource/routes/auth.routes.js"
import { connectMongoDB } from "./resource/lib/db.js";

dotenv.config( {path :".env"}) // lưu ý là path này tính từ thư mục node => = node_module
const port = process.env.PORT;

const app = express();
app.use(morgan("dev")); // log
app.use(cors())

app.get("/", function(req, res){
  return res.send("Hello World")
})

app.use("/api/auth", authRoutes)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
  connectMongoDB();
});
