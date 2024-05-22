const express=require("express");
//const http=require("http"); --->>we skip
const app=express();
const port=8003;
app.get("/",(req,res)=>{
    return res.send("hey welcome to homepage");
});
app.get("/about",(req,res)=>{
    return res.send("hey welcome to about");
});
app.get("/personalabout",(req,res)=>{
    return res.send("Hey  why you want his personal detail");
});
// we will skip this step in express
//let myServer=http.createServer(app);
//myServer.listen(8001,()=>{console.log("server start........")})
app.listen(port,()=>{console.log("server started.............")})