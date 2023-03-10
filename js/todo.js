import { INIT_STATE, newId } from './modules/helper.js';

let state = [...INIT_STATE];

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
  // uzbaigti todo
  // atnaujinti todo
}

function addNewTodo() {
  console.log('adding new todo');
  const title = el.input.value.trim();
  if (title.length === 0) {
    console.warn('tuscias todo');
    return;
  }
  console.log('title ===', title);
  const newTodoObject = { id: newId(), title, isDone: false };
  state.push(newTodoObject);
  render();
  // isvalyti input
  el.input.value = '';
}

function render(arr = state) {
  console.log('list rendering');
  // issivalyti konteineri
  el.list.innerHTML = '';
  const todoElsArr = arr.map(makeOneLi);
  el.list.append(...todoElsArr);
  console.log('state ===', state);
}

// todoObj === { id: 't_001', title: 'Learn HTML', isDone: true },
function makeOneLi(todoObj) {
  // <li class="list-group-item list-group-item-action">An item</li>
  // sukurti ir grazinti li el
  const liEl = document.createElement('li');
  liEl.className = 'list-group-item list-group-item-action';
  if (todoObj.isDone === true) liEl.classList.add('list-group-item-dark', 'del-text');
  liEl.textContent = todoObj.title;
  const btnDel = document.createElement('button');
  btnDel.addEventListener('click', () => deleteTodo(todoObj.id));
  btnDel.className = 'btn btn-danger float-end';
  btnDel.innerHTML = '<i class="bi bi-trash3"></i>';
  liEl.append(btnDel);
  return liEl;
}

function deleteTodo(idOfTodoToBeDeleted) {
  console.log('idOfTodoToBeDeleted ===', idOfTodoToBeDeleted);
  // filtruojam state
  // grazinam visus todo objek iskyrus ta kurio id yra idOfTodoToBeDeleted
  state = state.filter((tObj) => tObj.id !== idOfTodoToBeDeleted);
  render();
}
