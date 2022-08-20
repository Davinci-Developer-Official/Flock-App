/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const port = 5000;

//middleware
app.use(cors());
app.use(express.json);

app.listen(port,async(error)=>{
    if(port){
        console.log(`server is running on ${port}`)
    }
    console.log(error)
});

//routes
//create userSelect: 
app.post('/register',async(req,res)=>{
    try {
        
       const {username,occupation,user_password}= req.body;
       const newUser= await pool.query(
        'INSERT INTO users(username,occupation,user_password) VALUES($1,$2,$3) RETURNING *',
        [username,occupation,user_password]
       );
        console.log(newUser)
       //res.json(newUser.rows[0]);
       res.send(newUser);

    } catch (error) {
       console.error(error) 
    }
})

//get all users: 

app.get('/list',async(req,res)=>{
    console.log(req.body)
    try {
        const allUsers = await pool.query(
            'SELECT*FROM users'
        );  
        res.json(allUsers.rows[0])  
    } catch (error) {
        console.error(error);
    }
})

//get single user :login
app.get('/list/:id',async(req,res)=>{
    try {
        const{id} =req.params;
        const singleUser = await pool.query(
            'SELECT*FROM users WHERE user_id=$1',
            [id]
            );
        res.json(singleUser.rows[0]);

    } catch (error) {
        console.error(error);
    }
})

//update userSelect: 
app.put('/list/:id',async(req,res)=>{
    try {
        const {id , username , occupation , user_password }=req.params;    
        const updateUsers= await pool.query(
            'UPDATE users SET username,occupation,user_password = $1,$2,$3 WHERE user_id=$4,$5,$6',
            [username,occupation,user_password,id]
        );    
    res.json('user data was updated');

    } catch (error) {
       console.error(error); 
    }
})


//delete user
app.delete('/list/:id',async(req,res)=>{
    try {
        const{id}=req.params;
        const deleteUser= await pool.query(
            'DELETE FROM users WHERE user_id = $1',
            [id]
        )
    } catch (error) {
       console.error(error) 
    }
})