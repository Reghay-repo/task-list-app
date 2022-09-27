const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');

// call lodaEventListners()

loadEventListners();

//define function loadEventListners

function loadEventListners(){
  //add task
  form.addEventListener('submit', addTask);
  //remove task
  taskList.addEventListener('click', removeTask);
  //clear all tasks event
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks
  filter.addEventListener('keyup' , filterTasks);
  
}






// =======================
// FUNCTIONS

//addtask
function addTask(e) 
{
  //if request empty redirect
  if (taskInput.value == '') {
    alert('add a task please.');
  } 

  //create li to add
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement('a');

  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  
  li.appendChild(link);

  taskList.appendChild(li);

  taskInput.value = '';

  e.preventDefault();
}

//remove a task
function removeTask(e)
{ 
  if (e.target.parentElement.classList.contains('delete-item')) {
      if (confirm('proceed?')) {
        e.target.parentElement.parentElement.remove();
      }
  }

  e.preventDefault();
}

//clearTasks
function clearTasks(e) 
{ 
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  e.preventDefault();
}

//filter tasks
function filterTasks(e)
{
  //we get the value of the filter input 
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        //show item
        task.style.display = 'block';
      } else {
        
        task.style.display = 'none';
      }

    }
  )


}