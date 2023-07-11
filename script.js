const localStoragekey = 'to-do-list-zy';
function validationIfExistNewTask(){
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
    let inputValue = document.getElementById("input-new-task").value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask() {

    let input = document.getElementById("input-new-task");
    input.style.border = ''

     if (!input.value) {
        input.style.border = '1px solid red'
        alert("Digite algo para criar uma nova task!");
     } else if(validationIfExistNewTask()){
        alert("Task já existente! :)")
     }
     else{
        //incrementar no localStorage
        let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
        values.push({
            name: input.value
        })
        localStorage.setItem(localStoragekey,JSON.stringify(values))
        showValues();
     }
     
     input.value = ''

}
function showValues() {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
    let list = document.getElementById('list');
    list.innerHTML = '';

    for(let i = 0; i < values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button></li>`;
    }
}
function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
    let index = values.find(x =>x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStoragekey,JSON.stringify(values))
    showValues();
}
showValues();

