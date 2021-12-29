const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({
    path : "./configuration/configuration.env"
});
const database = require("./configuration/databaseConfiguration");
const userRouter = require("./routes/userRoute");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers",  "*");
    next();
});
app.use(express.json());
app.use("/api/v1/user",userRouter);

database()
    .then(()=>console.log("Connected To Database"))
    .catch(()=>console.log("Connection To Database Failed"));

const PORT = 8000 || process.env.PORT;
app.listen(PORT , ()=> console.log(`Server Started At PORT ${PORT}`));