import { INIT_STATE, newId } from './modules/helper.js';
import { loadStore, store } from './modules/storage.js';

class TodoApp {
  constructor() {
    this.state = loadStore() || [...INIT_STATE];
    this.el = {
      input: document.getElementById('new-todo-input'),
      addBtn: document.getElementById('add-todo'),
      list: document.getElementById('todos-list'),
    };
    this.initListeners();
    this.render();
  }

  initListeners() {
    this.el.addBtn.addEventListener('click', this.addNewTodo.bind(this));
  }

  addNewTodo() {
    const title = this.el.input.value.trim();
    if (title.length === 0) {
      console.warn('Empty todo');
      return;
    }
    const newTodoObject = { id: newId(), title, isDone: false };
    this.state.push(newTodoObject);
    this.render();
    this.el.input.value = '';
  }

  render() {
    this.el.list.innerHTML = '';
    const todoElsArr = this.state.map((todo) => this.makeOneLi(todo));
    this.el.list.append(...todoElsArr);
    store(this.state);
  }

  makeOneLi(todoObj) {
    const liEl = document.createElement('li');
    liEl.className = 'list-group-item list-group-item-action';
    if (todoObj.isDone === true) {
      liEl.classList.add('list-group-item-dark', 'del-text');
    }
    liEl.textContent = todoObj.title;
    const btnToggle = document.createElement('button');
    btnToggle.addEventListener('click', () => this.toggleTodo.call(this, todoObj.id));
    btnToggle.className = 'btn btn-info float-end me-2';
    btnToggle.innerHTML = '<i class="bi bi-check"></i>';
    const btnDel = document.createElement('button');
    btnDel.addEventListener('click', () => this.deleteTodo.call(this, todoObj.id));
    btnDel.className = 'btn btn-danger float-end';
    btnDel.innerHTML = '<i class="bi bi-trash3"></i>';
    liEl.append(btnDel, btnToggle);
    return liEl;
  }

  deleteTodo(idOfTodoToBeDeleted) {
    this.state = this.state.filter((tObj) => tObj.id !== idOfTodoToBeDeleted);
    this.render();
  }

  toggleTodo(idOfTodoToBeToggled) {
    const foundEl = this.state.find((tObj) => tObj.id === idOfTodoToBeToggled);
    foundEl.isDone = !foundEl.isDone;
    this.render();
  }
}

const app = new TodoApp();
