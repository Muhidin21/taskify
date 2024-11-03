const{Incomingform}=require('formidable')
const { readTasksForfile, writeTasksToFile } = require("../utilits/fileHandler")
exports.getTask=(req, res)=>{
    const tasks = readTasksForfile();
    res.writeHead(200,{'content-type':'application/json'})
    res.end(JSON.stringify(tasks))
}
exports.createTask=(req ,res)=>{
    const form=new Incomingform();
    form.parse(req,(err,fields,files)=>{
        if(err){
            res.writeHead(400,{'content-type':'applicatio/json' });
            res.end(JSON.stringify({
              message:'Error parsing form'  
            }))
            return;
        }
        const tasks=readTasksForfile();
        const newTask={
            Id: Date.now(),
            title: fields.title,
            descrebtion: fields ?.descrebtion || '',
            status: fields ?.status ||'pending',
            image:files.image ?`/uploads/${files.image.name}`: null,
        }
        tasks.push(newTask);
        writeTasksToFile(tasks);
        if(files.image){
            copyFilesync(files.image.path,path.join(__dirname,'../uploads',files.image.name));
            res.end(JSON.stringify(newTask))
        }
       
       
    })

}

exports.updateTask=(req,res)=>{
    res.end(JSON.stringify({
        message:'Not Yet Emlemented '
    }))
}

exports.deleteTask=(req,res)=>{
    res.end(JSON.stringify({
        message:'Not Yet Emlemented '
    }))
}
