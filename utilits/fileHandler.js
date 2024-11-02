const fs=require('fs');
const path=require('path');
const filepath='.data/task.json';
const writeTasksToFile=(tasks)=>{
    fs.writeFileSync(filepath,JSON.stringify(tasks))
}
const readTasksForfile=(tasks)=>{
    
}
