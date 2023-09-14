// reference html element in js
const formTask = document.querySelector(".form-task")

// menambahkan event listener dielement form
formTask.addEventListener("submit", (e) => {
    e.preventDefault();

    //reference html element input
    const inputForm = document.querySelector(".input-form");
    console.log(inputForm.value);
    
    // reference html element ul / wrapper list
    const wrapperList = document.querySelector(".task-list-wrapper");

    // create <li> using js
    const taskList = document.createElement("li");
    // masukkan input value ke <li>
    taskList.innerHTML = inputForm.value;
    // appen <li> ke <ul>
    wrapperList.append(taskList);
});