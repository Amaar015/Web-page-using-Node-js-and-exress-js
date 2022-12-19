
const express=require('express');
const app=express();
const port=process.env.PORT ||80;
const path =require('path');

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
    res.render('hello from weather page world')
})
app.get('*', (req,res)=>{
    res.render('404 error page')
})

app.listen(port,()=>{
    console.log(`Working from the port ${port} `)
})