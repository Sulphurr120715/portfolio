const todolist = [{}];

renderToDoList();


function renderToDoList() {
    let todoListHTML = '';

    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        const {name, dueDate} = todoObject



        const html = `
         <p>
           ${name} ${dueDate}

          <button onclick="
           todolist.splice(${i}, 1);

           renderToDoList();
          "> 
          Delete 
          
          </button>
         
         </p>

          `;
        todoListHTML += html;
    }


    document.querySelector('.js-to-list').innerHTML = todoListHTML;

}

function addToDo() {
    const inputElement = document.querySelector('.add-button');
    const InputDateElement = document.querySelector('.date-selector');
    const dueDate = InputDateElement.value;
    const name = inputElement.value;

    todolist.push({
        name: name,
        dueDate: dueDate
    });

     const Name = inputElement.value;
     console.log(todolist);

     inputElement.value = '';
     renderToDoList();
} 