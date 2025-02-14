const express=require("express");
const app =express();
app.use(express.json());
const dataArr=[];
app.listen(3000,()=>{
console.log('server is running on port 3000');
})
app.get('/',(req,res)=>{
res.status(200).json(`Data is : ${dataArr}`)
})
app.post('/webhook',(req,res)=>{
const data=req.body;
console.log(`someone pinged the webhook and the name is : ${JSON.stringify(data)}`);
dataArr.push(JSON.stringify(data));
res.status(200).json("Webhook pinged successfully!");
})
