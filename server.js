import express from 'express';


const app =  express();

app.get( '/' , (res, rej) => {
res.json('Hello World!')
})





app.listen(3000, () => {
    console.log("helllo thre ");
    
})