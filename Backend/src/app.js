const express=require('express');
const app=express();
app.use(express.json());
const cors=require('cors');
app.use(cors());
//app.use(express.urlencoded());
const aiRoutes=require('../src/routes/ai.route');

app.use('/ai',aiRoutes);

module.exports=app;