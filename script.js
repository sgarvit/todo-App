document.querySelector('#add').onclick = function () {
  if(document.querySelector('#newtask input').value.length == 0){
    alert ("Please Enter your task first...");
  }else{
    document.querySelector('#tasks').innerHTML += 
    `
    <div class='task'>
    <span id='taskname'>
    ${
      document.querySelector('#newtask input').value
    }
    </span>
    <button id="delete-btn">Del</button>
    </div>
    `;

    let deleteTask = document.querySelectorAll('#delete-btn');

    for(let i = 0; i < deleteTask.length; i++){
      deleteTask[i].onclick = function() {
        this.parentNode.remove();
      }
    }

    let tasks = document.querySelectorAll('#taskname');

    for(let i = 0; i< tasks.length; i++){
      tasks[i].onclick = function () {
        this.classList.toggle('completed');
      }
    };

    document.querySelector('#newtask input').value = '';
  }
}