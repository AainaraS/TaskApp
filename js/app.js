var arrayTasks = [];
var taskID = 0;
let task_list = document.getElementById('task_list');


//View: Add Task
//create function to execute on click of "add task" button. Task is to create an array using values from form
//update: account for if text area or due date is left blank by user. give alert and don't add anything to array 
function addTask() {
    let taskDesc = document.getElementById('title').value;
    let dueDate = document.getElementById('due_date').value;
    let status = 'new';
    taskID++;
        // console.log(taskDesc);
        // console.log(dueDate);

    if (taskDesc === '' || dueDate === '') {
        alert ('Please enter a Task and it\'s due date');
    } else { 
    
        
    //create an object that bags the above values
    const objectTask = {
        taskName: taskDesc,
        TaskDueDate: dueDate,
        taskStatus: status,
        taskID: taskID
    };
        console.log(objectTask.taskID);
    //push object into array
    arrayTasks.push(objectTask);
            console.log(arrayTasks);
            console.log('length of array is: ' +arrayTasks.length);
            console.log('task ID is ' + taskID);
        alert('You just added a new task. Good Luck!');
       renderList();
       clearForm();
    }
        
}

//function to reate a task dynamically
function renderTask (taskID,taskName,TaskDueDate) {
    const display =
        `
        <div class = 'taskContainer' id='${taskID}'>
            <input type = 'checkbox' class='actualCheckbox' id='cb' value='cb'>
            <div class = 'item'>
            <span class='taskName'> ${taskName}
                <span class='dueDate'> ${TaskDueDate}</span>
            </span>
            </div>
            <div class='delbutton' id='${taskName}'><button type="button" class="btn btn-danger hvr-pulse-shrink" id='delToDone' value='delete'>Delete</button></div> 
        </div>
        `
        return display;
}
//function to render all of the tasks 
function renderList () {
    let taskList = document.getElementById('task_list');
    taskList.innerHTML = "";
    for ( let i = 0; i < arrayTasks.length; i++) {
        taskList.innerHTML = taskList.innerHTML + 
        renderTask (arrayTasks[i].taskID,
                    arrayTasks[i].taskName,
                    arrayTasks[i].TaskDueDate)    
        
    }  
}


/* <div><input type = 'checkbox'></div>
    <div class = 'item'
    <span class='taskName'> ${arrayTasks[index].taskName}
            <span class='dueDate'> ${arrayTasks[index].TaskDueDate}</span>
        </span>
    </div>
    <div> <button type = 'button' class='del'> Delete </button> </div> 
 */


    // <div class="itemList"
    // <li>
    //     <span><input type = 'checkbox'></span>
    //     <span class='taskName'> ${arrayTasks[index].taskName}
    //         <span class='dueDate'> ${arrayTasks[index].TaskDueDate}</span>
    //     </span>
    //     <span> <button type = 'button' class='del'> Delete </button> </span> 

    // </li>
    // </div>




//blank out the form after adding a task
function clearForm() {
    document.getElementById('title').value = "";
    document.getElementById('due_date').value = "";
}


//remove task from array and render updated task list when delete button is clicked 
 
 task_list.addEventListener('click', (event) => {
    const clickedEvent = event.target;
        // console.log(clickedEvent); //html fragment of delete button //html fragment of checkbox line
        // console.log(clickedEvent.innerHTML); //"Delete" 
        console.log(clickedEvent.parentNode); //the html fragment of parent div 
    const parentNode = clickedEvent.parentNode; 
        console.log(parentNode.id); // the task name //and taskID
    // const task = parentNode.id;
         //console.log(task);
        //console.log(clickedEvent.innerHTML)
    if (clickedEvent.value === 'delete') {
        console.log('testing');
        const task = parentNode.id;
        let indexToDelete = -1;
        console.log(indexToDelete);
        for (i = 0; i < arrayTasks.length; i++) {
            if (arrayTasks[i].taskName === task) {
                indexToDelete = i;
                    console.log(indexToDelete);
                break;
            }
        } console.log(indexToDelete);
         arrayTasks.splice(indexToDelete,1);
         console.log(arrayTasks[0]);
         alert("You are deleting a task: " + task);
         renderList();
    } 
        else if (clickedEvent.value === 'cb') {
            //alert('I clicked a cb')
            const taskID = parseInt(parentNode.id);
            let indextoDisable = -1;
            console.log(indextoDisable);
            console.log(taskID);
            // console.log(arrayTasks[0].taskID);
            for (i = 0; i < arrayTasks.length; i++) {
                console.log(arrayTasks[i].taskID); //for loop is working fine
                console.log('loops');
                  if (arrayTasks[i].taskID === taskID) { //issue is with the IF statement
                    //  console.log('task with id found');
                    indextoDisable = i;
                    console.log(indextoDisable);
                     break;
                } 
        }
            //good to go--start rule set here
            arrayTasks[indextoDisable].taskStatus = 'Done';
            console.log(arrayTasks);
            // var x = document.getElementById("cb");
            // x.setAttribute("disabled", "false");
 
            document.getElementById('cb').disabled = true;
            console.log(arrayTasks[indextoDisable].taskStatus);
            document.getElementById('delToDone').innerHTML = 'Done';
            document.getElementById('delToDone').disabled = true;
            document.getElementById('delToDone').style.backgroundColor = 'grey';

    }
    })


    
//create a function to change the header color based on option chosen in settings view
function colorSettings () {
    let e = document.getElementById('colorScheme');
    let value = e.value;
    console.log(value); //confirm if the color selcted is being printed in console: yes
    if(value === 'Blue') {
        document.getElementById('headerColor').className = 'blue';
        document.getElementById('backgroundColor').className = 'blue';
        document.getElementById('list-tab').classList.remove('nav-link-green');
        document.getElementById('add-tab').classList.remove('nav-link-green');
        document.getElementById('settings-tab').classList.remove('nav-link-green');
        document.getElementById('list-tab').classList.remove('nav-link-purple');
        document.getElementById('add-tab').classList.remove('nav-link-purple');
        document.getElementById('settings-tab').classList.remove('nav-link-purple');

    } else if (value === 'Green') {
        document.getElementById('headerColor').className = 'green';
        document.getElementById('backgroundColor').className = 'green';
        document.getElementById('list-tab').classList.remove('nav-link-blue');
        document.getElementById('add-tab').classList.remove('nav-link-blue');
        document.getElementById('settings-tab').classList.remove('nav-link-blue');
        document.getElementById('list-tab').classList.remove('nav-link-purple');
        document.getElementById('add-tab').classList.remove('nav-link-purple');
        document.getElementById('settings-tab').classList.remove('nav-link-purple');
        document.getElementById('list-tab').classList.add('nav-link-green');
        document.getElementById('add-tab').classList.add('nav-link-green');
        document.getElementById('settings-tab').classList.add('nav-link-green');

    } else if (value === 'Purple') {
        document.getElementById('headerColor').className = 'purple';
        document.getElementById('backgroundColor').className = 'purple';
        document.getElementById('list-tab').classList.remove('nav-link-blue');
        document.getElementById('add-tab').classList.remove('nav-link-blue');
        document.getElementById('settings-tab').classList.remove('nav-link-blue');
        document.getElementById('list-tab').classList.remove('nav-link-green');
        document.getElementById('add-tab').classList.remove('nav-link-green');
        document.getElementById('settings-tab').classList.remove('nav-link-green');
        document.getElementById('list-tab').classList.add('nav-link-purple');
        document.getElementById('add-tab').classList.add('nav-link-purple');
        document.getElementById('settings-tab').classList.add('nav-link-purple');
        
    } 
}

//create a function to set the name of user in the header
//logic: if name entered in text box = somee value, then set it as the text in the span with id='name'
function setName () {
    //console.log('I am trying to set the user name')
    let userName = document.getElementById('userName').value;
    console.log(userName);
    if (userName === '') {
        alert('Don\'t forget to enter your name' );
    }
    else {
        document.getElementById('name').innerHTML = userName + "'s";
    }
   
}


