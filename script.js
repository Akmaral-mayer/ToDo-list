// creatig the main container
let main = document.createElement("main");
main.className = "container";
document.body.append(main);

//just greeting
let projectName = document.createElement("h1");
projectName.innerHTML = "Let's Do It";
main.append(projectName);

// creating a block for future list
let block = document.createElement("div");
block.className = "mainBlock";
main.append(block);

// creating a block-parent for crearing a new todo
let firstDiv = document.createElement("div");
block.append(firstDiv);

// input for creating new todo
let textIn = document.createElement("input");
textIn.className = "textIn";
textIn.setAttribute("placeholder", " Gonna do");
firstDiv.append(textIn);

// creating a new input with type of date
let setDate = document.createElement("input");
setDate.setAttribute("type", "date");
firstDiv.append(setDate);

// button to add
let addBtn = document.createElement("button");
addBtn.id = "addBtn";
addBtn.innerHTML = "Add"
firstDiv.append(addBtn);

// set a function
addBtn.setAttribute("onclick", "Add()");

// function for addBtn 
Add = () => {
    console.log('work')
    let newTask = textIn.value;
    if (newTask != null) {
        let li = document.createElement('li');
        // new button to delete
        let deleteBtn = document.createElement('button');
        deleteBtn.id = "deleteBtn";
        deleteBtn.innerHTML = "<img src='./del.png'>";
        deleteBtn.setAttribute("onclick", "deleteTask(this)");
        // new checkbox
        let doneBtn = document.createElement("button");
        doneBtn.id = "doneBtn";
        doneBtn.innerHTML = "<img src='./icon.png'>"
        doneBtn.setAttribute("onclick", "done(this)");

        let txt = document.createTextNode(setDate.value + " " + newTask);
        let label = document.createElement("label");
        label.className = "task";
        label.append(txt);

        li.append(label);
        li.append(doneBtn);
        li.append(deleteBtn);
        list.append(li);
    }

}

// function for deleteBtn
deleteTask = (e) => {
    e.parentNode.parentNode.removeChild(e.parentNode);
    // console.log("works");
}

// function for doneBtn
done = (e) => {
    e.parentNode.classList.add("done");
}

// creating ul for future todos
let list = document.createElement("ul");
list.id = "list";
block.append(list);

