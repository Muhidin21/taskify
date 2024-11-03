const { getTask, createTask } = require("../controllers/taskControllers");

const taskrRoutes= (req,res)=>{
    if (req.method=== 'GET'){
        getTask(req,res);
    }else if(req.method==='POST'){
       createTask(req,res);
    }else if(req.method==='PATCH'){
      updateTask(req,res);
    }else if(req.method==='DELET'){
        deleteTask(req, res);
    }else{
        res.writteHead(404),'Not Found',{'content-type' :'application/json'}
        res.end(JSON.stringify({
            message:'Unknown Method Required. '
        })) 
    }
}
module.exports = taskrRoutes;