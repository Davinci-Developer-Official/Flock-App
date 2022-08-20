const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const{Server}= require('socket.io');
const io = new Server;
const cors = require('cors')
let port= 3200;
server.listen(port,async()=>{
   try {
        console.log(`server running on port : ${port}`)
   } catch (err) {
        console.error(err)
   }
});
//middlewares;
app.use(cors());
app.use(express.json);
app.use(express.urlencoded({extended: false}));

//connection apis.
let data =[
     {
          animal:'snake'
     }
]
app.get('/data',async(req,res)=>{
    try {
     console.log(`data flowing`);
     res.writeHead(200)
     res.send(data)
    } catch (error) {
     console.error(error)
    }
    res.writeHead(403).send(`forbidden`);
})


//socket io;
io.on('connect',(socket)=>{
    console.log('users connected');
    socket.on()
})