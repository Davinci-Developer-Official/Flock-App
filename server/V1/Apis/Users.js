/* eslint-disable no-unused-vars */
const express = require('express')
const app = express();
const port = 4000 || 5000 ;

app.listen(port,()=>{
    console.log(`sphereUserApi listening to port ${port}`)
})
app.use(express.json);
app.use(express.urlencoded({extended: false}));

const users = [
    {Name: 'Thomas', Role: 'Developer' ,Password:'mithamo' },
];

const remark = [
    { tittle: 'i love javascript'  }
]

app.get('/users',async(req,res)=>{
    res.writeHead(200)
    res.status(200).send(users);
});

app.post('/users',async(req,res)=>{
    console.log(req.body);
    res.status(201).send('User Created');
});
