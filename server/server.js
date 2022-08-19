const express =require ('express');
const app = express();
const http= require ('http');
const cors = require ('cors');
const port = 3500;
const Sphere = http.createServer(app)
const {Server} = require ('socket.io');
const io = new Server(Sphere);
 
// eslint-disable-next-line no-unused-vars
io.on('connection',(socket)=>{
    console.log(`a user is connected`)

    socket.on('chat message',(msg)=>{
        io.emit('chat message' , msg);
    })
    
    //on reload or disconnnect.
    socket.on('disconnect',()=>{
        console.log('user has disconnected')
    } )
})



app.use(cors())
app.get('/', async(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
Sphere.listen(port,(rep,res)=>{
    rep = true;
    res = "connection failed";
    if(rep){
        console.log(`Sphere tech servers are on  running via port ${port}`)
    }else{
        console.log(res)
    }   
} )
//const server= http.createServer(app);

