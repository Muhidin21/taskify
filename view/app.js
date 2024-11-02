
const HTTP=require('http'); 
const HOSTNAME='localhost';
const PORT=90000;
const server=HTTP.createServer((req,res)=>{
    if(req.url.startsWith('/tasks')){
        taskRoutes(req,res)
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