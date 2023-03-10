const INIT_STATE = [
  { id: 't_001', title: 'Learn HTML', isDone: true },
  { id: 't_002', title: 'Learn CSS', isDone: true },
  { id: 't_003', title: 'Learn JS', isDone: false },
  { id: 't_004', title: 'Learn GIT', isDone: false },
];

const state = [...INIT_STATE];

// taikomes
const el = {
  input: document.getElementById('new-todo-input'),
  addBtn: document.getElementById('add-todo'),
  list: document.getElementById('todos-list'),
};

// event listeners
function initListeners() {
  console.log('initListeners');
  el.addBtn.addEventListener('click', addNewTodo);
}

app();
function app() {
  console.log('app started');
  initListeners();
  // nupiesti/sugeneruoti todos
  render();
  // prideti nauja todo
  // istrinti todo
  // atnaujinti todo
}

function addNewTodo() {}

function render(arr = state) {
  arr.forEach((tObj) => {
    // make new li makeOneLi()
    // add to el.list
  });
}

function makeOneLi(todoObj) {
  // <li class="list-group-item list-group-item-action">An item</li>
  // sukurti ir grazinti li el
}
