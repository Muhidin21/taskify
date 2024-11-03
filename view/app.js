
const HTTP=require('http'); 
const taskrRoutes = require('../routes/taskRoutes');
const HOSTNAME='localhost';
const PORT=9001;
const server=HTTP.createServer((req,res)=>{
    if(req.url.startsWith('/tasks')){
        taskrRoutes(req,res)
    }
    else{
        resizeTo.writeHead(404,' Not Found',{'content-type':'application/json'})
        res.end(JSON.stringify({
            message:'Sorry You Got Lost!'
    }) )
        
    }
});
server.listen(PORT,HOSTNAME,()=>{
    console.log(`server running port ${PORT}`);
    
})