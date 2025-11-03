require('dotenv').config();
const app=require('./src/app');

const PORT=3000;

app.get('/',(req,res)=>{{
    res.send('hello darshan salunke');
}})
app.listen(3000,()=>{
    console.log(`server is live on port ${PORT}`);
})