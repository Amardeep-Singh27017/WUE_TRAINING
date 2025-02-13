document.addEventListener('DOMContentLoaded', () => {
    const storedTask = JSON.parse(localStorage.getItem('tasks'))

    if (storedTask) {
        storedTask.forEach((task) => tasks.push(task));
        updatetasksList();
        updateStats();
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
    // const text = taskinput.value.trim();


    let inputTask = {
        taskName: taskName,
        taskDesc: taskDesc,
        taskDeadline: taskDeadline
    };

    if (inputTask) {
        tasks.push(inputTask);  // completed : false
        console.log(tasks)
        updatetasksList();
        updateStats();
        saveTasks();
    }
};

// const toggleTaskComplete = (index) =>{
//     tasks[index].completed = !tasks[index].completed
//     updatetasksList();
//     updateStats();
//     saveTasks();
// }

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updatetasksList();
    updateStats();
    saveTasks();
};

// const editTask = (index) =>{
//     const taskinput = document.getElementById('taskinput');
//     taskinput.value = tasks[index].text;

//     tasks.splice(index, 1);
//     updatetasksList();
//     updateStats();
//     saveTasks();
// }




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
                                <img onClick="deleteTask(${index}) src="delete_icon.gif" alt="">
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
    taskName.value = '';
    taskDeadline.value = '';
    taskDesc.value = '';
});


const blastconfitti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}