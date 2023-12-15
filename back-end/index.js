import express  from "express"
import authRoute from "./routes/auth.js"
import corporateRoute from "./routes/corporateRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express();

//middlewares
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true);
    next();
})
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
}))
app.use(cookieParser())

app.use("/",authRoute)
app.use("/corporate",corporateRoute)

app.listen(8000,()=>{
    console.log("API working");
});