const express=require('express');
const app=express();
const port=2000;

 app.get('/',(req,res)=>{
     
    res.send("hello world ");
 })

 app.listen(port,()=>{
     console.log(`server is listening at port http://localhost:${port}`);
 })
