const list = document.getElementsByClassName('toDoList')[0];
const savedToDoList = ['wash dogs', 'mow lawn'];

const addListItem = (event) => {
  newListItem(event.target[0].value);
  event.target.reset();
  event.preventDefault();
}

const newListItem = (item) => {
  if (!savedToDoList.includes(item)) {
    savedToDoList.push(item);
  }
  let newListItem = document.createElement('li');
  newListItem.innerText = item;
  newListItem.className = 'toDoItem';
  list.appendChild(newListItem);
}

const addSavedToDoList = () => {
  savedToDoList.forEach(item => newListItem(item));
}

const removeListItem = (event) => {
  console.log("in remove. this is event: ", event.target)
}


//On load
addSavedToDoList();
document.getElementsByClassName('toDoInput')[0].onsubmit = addListItem;
