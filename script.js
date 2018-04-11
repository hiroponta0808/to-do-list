// var input = document.getElementById('title');
// var textarea = document.getElementById('content');
var addBtn = document.getElementById('add-btn');
var removeBtn = document.getElementById('remove-btn');
var toDoArea = document.getElementById('todo-area');
var formArea = document.getElementById('form-area');
var form = document.forms['todo-form'];

var todoArray = [];

addBtn.addEventListener('click', function() {
  var titleForm = form.title;
  // if (title === '') (!title) {
  //   return false;
  // }
  var contentForm = form.content;
  var id = Math.random();
  var todo = {
    id: id,
    title: titleForm.value,
    content: contentForm.value,
  };

  if (!todo.title) {
    return false;
  };


  addTodo(todo);
  saveTodo(todo);

  titleForm.value = '';
  contentForm.value = '';

});

var addTodo = function(todo) {
  var titleTemp = document.createElement('h2');
  var contentTemp = document.createElement('p');
  titleTemp.innerHTML = todo.title;
  contentTemp.innerHTML = todo.content;

  var todoListItem = document.createElement('li');
  todoListItem.classList.add('todo-list-box');

  var todoListItemBtn = document.createElement('button');
  todoListItemBtn.className = 'todo-remove-btn';
  todoListItemBtn.id = 'todo-remove-btn';
  todoListItemBtn.innerHTML = '削除';
  todoListItemBtn.addEventListener('click', function() {
    toDoArea.removeChild(todoListItem);

    var target = todoArray.find(function(elem) {
      return elem.id === todo.id;
    });

    var targetIndex = todoArray.indexOf(target);
    todoArray.splice(targetIndex, 1);
    saveLocalStorage(todoArray);
  });
  todoListItem.appendChild(titleTemp);
  todoListItem.appendChild(contentTemp);
  todoListItem.appendChild(todoListItemBtn);
  toDoArea.appendChild(todoListItem);
};

var saveTodo = function(todo) {
  todoArray.push(todo);
  saveLocalStorage(todoArray);
};

var saveLocalStorage = function(todos) {
  todos = JSON.stringify(todos);
  localStorage.setItem('todoItems', todos);
};

window.addEventListener('load', function() {
  var data = localStorage.getItem('todoItems');
  if (!data) {//ローカルスオレージにデータが保存されていない場合(nullになっている場合
    return false;
  }
  todoArray = JSON.parse(data);
  for (var i = 0; i < todoArray.length; i++) {
    addTodo(todoArray[i]);
  }
});

removeBtn.addEventListener('click', function() {
  localStorage.clear();
  todoArray = [];
  while (toDoArea.firstChild) {
    toDoArea.removeChild(toDoArea.firstChild);
  }
});

// var todoRemoveBtn = document.getElementById('todo-remove-btn');
// todoRemoveBtn.addEventListener('click', function() {
//   localStorage.removeItem('todoItems');
// });


// var text = document.getElementById('text');
// var sample = document.getElementById('sample-btn');
//
// sample.addEventListener('click', function() {
//   var title = text.innerHTML;
//   title = '';
//   text.innerHTML = '';
//   console.log(title);
// })

// var apple = {
//   id: 2,
//   name: 'りんご',
// }
//
// var fruits = [
//   {name: 'rinngo', id: 1},
//   {name: 'budou', id: 2},
//   {name: 'banana', id:3},
//   {name: 'mikann', id: 4},
// ];
//
// var result = fruits.find(function(elem) {
//   return elem.id === apple.id;
// });
//
// console.log(result);
