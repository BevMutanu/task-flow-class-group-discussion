//TASK 1
let task = [
    {
        title: "attendace",
        status: "true",
        priority: "high"
    },
    {
        title: "Module 1",
        status: "Finished",
        priority: "high"
    },
    {
        title: "Module 2",
        status: "In Progress",
        priority: "high"
    },
    {
        title: "Module 4",
        status: "In Progress",
        priority: "high"
    }
]

//TASK 2
function addTask(title, status, priority){
    let newObject = {
        title: title,
        status: status,
        priority: priority
    }
    let newTask = task.push (newObject);
    return newTask;
};

console.log(addTask("Module 3", "Not Started", "high"));
console.log(task);

const finishTask = (title) => {
    for (let i = 0; i < task.length; i ++) {
        if (task[i].title === title){
        task[i].status = "Finished";
    };
    };
    
};
console.log (finishTask("Module 2"));
console.log(task);

const deleteTask = (title) => {
    task = task.filter (task => task.title !== title);
    return task;
};

console.log(deleteTask("Module 3"));
console.log(task);

const allTasks = (task.map(task => task.title))
console.log (allTasks);

const pendingTask = (task.filter(task => task.status === "In Progress"));
console.log(pendingTask);

module.exports = { task, addTask };
