const list = document.getElementsByClassName('toDoList')[0];
let savedToDoList = ['wash dogs', 'mow lawn'];

const addListItem = (event) => {
  const errorMessage = document.getElementsByClassName('errorMessage')[0];
  if (errorMessage) {
    errorMessage.remove();
  }
  newListItem(event.target[0].value);
  event.target.reset();
  event.preventDefault();
}

const showError = (item) => {
  const errorMessage = document.createElement('div')
  const parent = document.getElementsByClassName('inputContainer')[0];

  errorMessage.innerText = `${item} is already on your list`
  errorMessage.className = 'errorMessage'
  parent.appendChild(errorMessage);
}

const newListItem = (item, onLoad = false) => {
  if (!savedToDoList.includes(item) || onLoad) {
    savedToDoList.push(item);

  let newListItem = document.createElement('li');
  newListItem.className = 'toDoItem';

  // let newListItemSpan = document.createElement('span');
  // newListItemSpan.className = 'toDoItemSpan';

  let newListItemLink = document.createElement('a');
  newListItemLink.className = "toDoItemLink"
  newListItemLink.href = '#';
  newListItemLink.innerText = item;
  newListItemLink.onclick = removeListItem;

  // newListItemSpan.appendChild(newListItemLink);
  // newListItem.appendChild(newListItemSpan);
  newListItem.appendChild(newListItemLink);
  list.appendChild(newListItem);

} else {
  showError(item);
}
}

const addSavedToDoList = () => {
  savedToDoList.forEach(item => newListItem(item, true));
}

const removeListItem = (event) => {
  let listItemLink = event.target;
  listItemLink.parentElement.className = 'toDoItemCompleted';
  listItemLink.style.textDecoration = 'line-through';
  setTimeout(function () {
    let listItem = event.target.innerText;
    savedToDoList = savedToDoList.filter(item => item !== listItem);
    listItemLink.parentElement.remove();
  }.bind(this), 1000)

  event.preventDefault();

}


//On load
addSavedToDoList();
document.getElementsByClassName('toDoInput')[0].onsubmit = addListItem;
