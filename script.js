// var input = document.getElementById('title');
// var textarea = document.getElementById('content');
var addBtn = document.getElementById('add-btn');
var removeBtn = document.getElementById('remove-btn');
var toDoArea = document.getElementById('todo-area');
var formArea = document.getElementById('form-area');
var form = document.forms['todo-form'];
console.dir(form);

var todoArray = [];

addBtn.addEventListener('click', function() {
  var title = form.title.value;
  var content = form.content.value;
  var todo = {
    title: title,
    content: content,
  };

  addTodo(todo);
  saveTodo(todo);


});

var addTodo = function(todo) {
  var titleTemp = document.createElement('h2');
  var contentTemp = document.createElement('p');
  titleTemp.innerHTML = todo.title;
  contentTemp.innerHTML = todo.content;

  var todoListItem = document.createElement('li');
  todoListItem.className = 'todo-list';
  var todoListItemBtn = document.createElement('button');
  console.dir(todoListItemBtn);
  todoListItemBtn.className = 'todo-remove-btn';
  todoListItemBtn.id = 'todo-remove-btn';
  todoListItemBtn.innerHTML = '削除';
  todoListItem.appendChild(titleTemp);
  todoListItem.appendChild(contentTemp);
  todoListItem.appendChild(todoListItemBtn);
  toDoArea.appendChild(todoListItem);

  todoListItem.classList.add('todo-list-box');

};

var saveTodo = function(todo) {
  todoArray.push(todo);
  // console.log(todoArray);
  saveLocalStorage(todoArray);
};

var saveLocalStorage = function(todos) {
  todos = JSON.stringify(todos);
  localStorage.setItem('todoItems', todos);
};

window.addEventListener('load', function() {
  var data = localStorage.getItem('todoItems');
  data = JSON.parse(data);
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    addTodo(data[i]);
  }
});

removeBtn.addEventListener('click', function(e) {
  localStorage.clear(e);
  e.preventDefault();
});

// var todoRemoveBtn = document.getElementById('todo-remove-btn');
// todoRemoveBtn.addEventListener('click', function() {
//   localStorage.removeItem('todoItems');
// });
