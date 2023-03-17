import { INIT_STATE, newId } from './modules/helper.js';
import { loadStore, store } from './modules/storage.js';

class TodoList {
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
    this.el.addBtn.addEventListener('click', this.handleAddNewTodo.bind(this));
  }

  handleAddNewTodo() {
    const title = this.el.input.value.trim();
    if (title.length === 0) {
      console.warn('tuscias todo');
      return;
    }
    const newTodoObject = { id: newId(), title, isDone: false };
    this.state.push(newTodoObject);
    this.render();
    console.log('this.state ===', this.state);
    this.el.input.value = '';
  }

  render() {
    this.el.list.innerHTML = '';
    const todoElsArr = this.state.map((todoObj) => {
      const todoListItem = new TodoListItem(todoObj);
      return todoListItem.render();
    });
    this.el.list.append(...todoElsArr);
    store(this.state);
  }
}

class TodoListItem {
  constructor(todoObj) {
    this.todoObj = todoObj;
    this.el = document.createElement('li');
    this.el.className = 'list-group-item list-group-item-action';
    if (this.todoObj.isDone === true) {
      this.el.classList.add('list-group-item-dark', 'del-text');
    }
    const btnToggle = document.createElement('button');
    btnToggle.addEventListener('click', this.handleToggleTodo.bind(this));
    btnToggle.className = 'btn btn-info float-end me-2';
    btnToggle.innerHTML = '<i class="bi bi-check"></i>';
    const btnDel = document.createElement('button');
    btnDel.addEventListener('click', this.handleDeleteTodo.bind(this));
    btnDel.className = 'btn btn-danger float-end';
    btnDel.innerHTML = '<i class="bi bi-trash3"></i>';
    this.el.append(btnDel, btnToggle);
  }

  handleDeleteTodo() {
    this.todoList.state = this.todoList.state.filter((tObj) => tObj.id !== this.todoObj.id);
    this.todoList.render();
  }

  handleToggleTodo() {
    const foundEl = this.todoList.state.find((tObj) => tObj.id === this.todoObj.id);
    foundEl.isDone = !foundEl.isDone;
    this.todoList.render();
  }

  render() {
    this.el.textContent = this.todoObj.title;
    return this.el;
  }
}

const todoList = new TodoList();
