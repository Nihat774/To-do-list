const box = document.getElementById("box");
const textAndBtn = document.createElement("div")
const text = document.createElement("input")
const button = document.createElement("button")
const newList = document.createElement("div")


//textAndBtn
textAndBtn.append(text)
textAndBtn.appendChild(button)
textAndBtn.className = "text-btn"
box.appendChild(textAndBtn)

// input
text.type = "text"
text.className = "textInput"
text.setAttribute("placeholder", "enter text")

// button
button.className = "btn"
button.innerHTML = "ADD"
button.setAttribute("onclick", 'newListAppend()')

// taskword
let taskWord = document.createElement("div")
taskWord.innerHTML = "You tasks"
taskWord.className = "taskWord"
box.appendChild(taskWord)
 
// newList
box.append(newList)
// newList.appendChild(newTask)
newList.className = "newList"
// functions

function newListAppend() {
    if (text.value.length == 0) {
        alert("Enter text")
    }
    else {
        // tasks.push(text.value)
        let newTask = document.createElement("div")
        newTask.className = "newTask"
        let bigDiv = document.createElement("div")
        let slashAndTrash = document.createElement("div")
        const trash = document.createElement("button")
        const slash = document.createElement("button")
        const underSlash = document.createElement("button")
        slashAndTrash.append(slash, underSlash, trash)
        underSlash.className = "iconDiv notSlash"

        slashAndTrash.className = "slashAndTrash"
        trash.onclick = deleteList;
        slash.className = "iconDiv"
        slash.onclick = lineThrough;
        slash.ondblclick = none;
        underSlash.onclick = underline;
        underSlash.ondblclick = none;
        trash.innerHTML = `<div><i class="fa-regular fa-trash-can "></i></div>`
        underSlash.innerHTML = `<div><i class="fa-solid fa-underline"></i></div>`
        slash.innerHTML = `<div><i class="fa-solid fa-text-slash"></i></div>`
        trash.className = "iconDiv"
        bigDiv.className = "bigDiv"
        newTask.append(text.value)
        text.value = ""
        bigDiv.append(newTask, slashAndTrash)
        newList.appendChild(bigDiv)
        function deleteList() {
            bigDiv.remove()
        }
        function lineThrough() {
            newTask.style.textDecoration = "line-through"
        }
        function none(){
            newTask.style.textDecoration = "none"
        }
        function underline() {
            newTask.style.textDecoration = "underline"
        }

    }

}
// textValue.remove()
// console.log(newList);
// console.log(box);
// console.log(tasks);
