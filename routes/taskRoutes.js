const taskrRoutes= (req,res)=>{
    if (req.method=== 'GET'){
        res.method===('Get all tasks')

    }else if(req.method==='POST'){
        res.end('Create a new task');
    }else if(req.method==='PATH'){
        res.end('Updatea task')
    }else if(req.method==='DELET'){
        res.end('Delete a task');
    }else{
        res.writteHead(404),'Not Found',{'content-type' :'application/json'}
        res.end(JSON.stringify({
            message:'Unknown Method Required. '
        })) 
    }
}