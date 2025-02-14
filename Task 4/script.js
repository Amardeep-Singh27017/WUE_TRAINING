document.addEventListener('DOMContentLoaded', () => {
    const storedTask = JSON.parse(localStorage.getItem('tasks'))

    if (storedTask) {
        storedTask.forEach((task) => tasks.push(task));
        updatetasksList();

    }
})

let tasks = [];

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addTask = () => {
    const taskName = document.getElementById('taskname').value.trim();
    const taskDesc = document.getElementById('taskdesc').value.trim();
    const taskDeadline = document.getElementById('taskdeadline').value.trim();

    if (taskName == "" || taskDesc == "" || taskDeadline == "") {
        alert("Please fill in all fields");
        return;
    }

    let inputTask = {
        taskName: taskName,
        taskDesc: taskDesc,
        taskDeadline: taskDeadline,
    };

    if (inputTask) {
        tasks.push(inputTask);  // completed : false
        // console.log(tasks)
        updatetasksList();
        saveTasks();
    }
    document.getElementById('task-form').reset();
};

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed
    updatetasksList()
    saveTasks();
}

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updatetasksList();

    saveTasks();
};

const editTask = (index) => {

    document.getElementById('taskname').value =  tasks[index].taskName; 
    document.getElementById('taskdesc').value = tasks[index].taskDesc;
    document.getElementById('taskdeadline').value =  tasks[index].taskDeadline;

    updatetasksList();
    tasks.splice(index, 1);
    saveTasks();
}


const updatetasksList = () => {
    const taskList = document.getElementById('tasklist');
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const createddiv = document.createElement("div");


        createddiv.innerHTML = `
          <div id="add-task-container">
                    <div id="task-added">
                        <div class="task-detail">
                            <p id="task-name">${task.taskName}</p>
                            <p id="task-desc">${task.taskDesc}</p>
                            <p id="task-deadline">${task.taskDeadline}</p>
                        </div>
                        <div class="task-status">
                            <p>status: ${task.completed ? 'completed' : 'incomplete'}</p>
                            <span>
                                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                                <lord-icon
                                    onClick="editTask(${index})" 
                                    class="delete_icon"  
                                    src="https://cdn.lordicon.com/fikcyfpp.json"
                                    trigger="hover"
                                    stroke="bold"
                                    colors="primary:#30c9e8,secondary:#08a88a"
                                    style="width:23px;height:23px">
                                </lord-icon>
                                <lord-icon
                                    onClick="deleteTask(${index})" 
                                    class="delete_icon"  
                                    src="https://cdn.lordicon.com/hwjcdycb.json"
                                    trigger="hover"
                                    stroke="bold"
                                    colors="primary:#30c9e8,secondary:#08a88a"
                                    style="width:23px;height:23px">
                                </lord-icon>
                            </span>
                        </div>
                    </div>
                </div>
        `;

        createddiv.addEventListener('change', () => toggleTaskComplete(index));
        // console.log(taskList);
        taskList.append(createddiv);
    });
};

document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    addTask();
});
