require('dotenv').config();
const app=require('./src/app');



app.get('/',(req,res)=>{{
    res.send('hello darshan salunke');
}})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));