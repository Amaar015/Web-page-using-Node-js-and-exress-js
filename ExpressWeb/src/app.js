
const express=require('express');
const app=express();
const port=process.env.PORT ||80;
const path =require('path');

const staticPath= path.join(__dirname,'../public')

app.use(express.static(staticPath));
app.get('', (req,res)=>{
        res.send('hello world')
})
app.get('/about', (req,res)=>{
    res.send('hello from the about page world')
})
app.get('/weather', (req,res)=>{
    res.send('hello from weather page world')
})
app.get('*', (req,res)=>{
    res.send('404 error page')
})

app.listen(port,()=>{
    console.log(`Working from the port ${port} `)
})