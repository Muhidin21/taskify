const { execFileSync } = require('child_process');
const fs=require('fs');
const path=require('path');
const filepath='.data/task.json';
const writeTasksToFile=(tasks)=>{
    fs.writeFileSync(filepath,JSON.stringify(tasks))
}
const readTasksForfile=(tasks)=>{
    if(! fs.existsSync(filepath)){
        writeTasksToFile([])
    }
    const data=fs.readFileSync(filepath);
    return JSON.parse(data)
}
