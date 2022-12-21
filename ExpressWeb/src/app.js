
const express=require('express');
const app=express();
const port=process.env.PORT ||8000;
const path =require('path');
const hbs=require('hbs')

const staticPath= path.join(__dirname,'../public')

app.use(express.static(staticPath));

   app.set('view engine','hbs')

app.get('', (req,res)=>{
        res.render('index')
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/weather', (req,res)=>{
    res.render('weather')
})
app.get('*', (req,res)=>{
    res.render('404')
})

app.listen(port,()=>{
    console.log(`Working from the port ${port} `)
})