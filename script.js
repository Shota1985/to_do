const mainForm = document.querySelector("#form");
const taskInput = document.querySelector("#taskinput");
const tasksList = document.querySelector(".tasks__list");

let tasks = [];//массив для ЛС

mainForm.addEventListener("submit", addTask);
tasksList.addEventListener("click", deleteTask);
tasksList.addEventListener("click", doneTask);

function addTask(event) {
  // остановить перезагрузку страницы
  event.preventDefault();
  //вывести текст из инпут-поля
    const taskText = taskInput.value;
    //объект для массива ЛС
    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    }
    //пушим объ в масс
    tasks.push(newTask)
    //константа для ключа done
    const newTaskDone = newTask.done ? doneTask : "task__title";

  console.log(taskText);
  const taskHTML = `<li id="${newTask.id}" class="task__item">
        <span class="${newTaskDone}">${newTask.text}</span>
        <div class="task-item__buttons">
          <button class="task__done" data-action="done">
            <img src="./pictures/Check.png" alt="done" /></button
          ><button class="task__delete" data-action="delete">
            <img src="./pictures/Vector.png" alt="delete" />
          </button>
        </div>
      </li>`;
  //добавить на страницу
  tasksList.insertAdjacentHTML("beforeend", taskHTML);
  //очищаем поле инпут
  taskInput.value = "";
  taskInput.focus();
  //скрыть спиок why dosn`t work!!!!!!!!!!!!!?????????
  if (tasksList.children.length < 0) {
      tasksList.style.display = "none";
      
    }
     if (taskText.length == 0) {
        taskInput.value = "Please, fill me up";
    
    }
}
function deleteTask(event) {
  //найти кнопку удалить
  if (event.target.dataset.action === "delete") {
      const parenNode = event.target.closest(".task__item");
      //удаление задачи из данных
      const id = Number(parenNode.id)
      //находим индекс в массиве tasks
      const index = tasks.findIndex((task) => task.id === id
      );
      console.log(index);
      //вырезаем индекс из массива
      tasks.splice(index, 1)
    parenNode.remove();
  }
}

function doneTask(event) {
  //найти и активировать кнопку done
    if (event.target.dataset.action !== "done") return;
      const parenNode = event.target.closest(".task__item");
      const taskDone = parenNode.querySelector('.task__done');
      taskDone.style.backgroundImage =
          "url(./pictures/btn.create.png)";
      taskDone.style.backgroundRepeat = "no-repeat";
      taskDone.style.backgroundSize = "25px";
      console.log(taskDone);
  
}
