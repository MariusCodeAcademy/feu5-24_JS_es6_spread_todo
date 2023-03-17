import { store } from '../modules/storage.js';
import Todo from './Todo.js';

class App {
  static state = [];

  constructor(state = []) {
    this.el = {
      input: document.getElementById('new-todo-input'),
      addBtn: document.getElementById('add-todo'),
      list: document.getElementById('todos-list'),
    };
    App.state = state;
    this.initListeners();
    this.render();
  }

  initListeners() {
    console.log('initListeners');
    this.el.addBtn.addEventListener('click', this.addNewTodo.bind(this));
  }

  makeOneLi(todoObj) {
    const liEl = document.createElement('li');
    liEl.className = 'list-group-item list-group-item-action';
    if (todoObj.isDone === true) liEl.classList.add('list-group-item-dark', 'del-text');
    liEl.textContent = todoObj.title;
    const btnToggle = document.createElement('button');
    btnToggle.addEventListener('click', () => this.toggleTodo(todoObj.id));
    btnToggle.className = 'btn btn-info float-end me-2';
    btnToggle.innerHTML = '<i class="bi bi-check"></i>';
    const btnDel = document.createElement('button');

    btnDel.addEventListener('click', this.deleteTodo.bind(this, todoObj.id));
    btnDel.className = 'btn btn-danger float-end';
    btnDel.innerHTML = '<i class="bi bi-trash3"></i>';
    liEl.append(btnDel, btnToggle);
    return liEl;
  }

  render(arr = App.state) {
    console.log('list rendering');
    // issivalyti konteineri
    this.el.list.innerHTML = '';
    const todoElsArr = arr.map(this.makeOneLi.bind(this));
    this.el.list.append(...todoElsArr);
    console.log('App.state ===', App.state);
    store(App.state);
  }

  addNewTodo() {
    console.log('adding new todo');
    // console.log('this.el ===', this);
    const title = this.el.input.value.trim();
    if (title.length === 0) {
      console.warn('tuscias todo');
      return;
    }
    console.log('title ===', title);
    const newTodoObject = new Todo(title);
    console.log('newTodoObject ===', newTodoObject);
    App.state.push(newTodoObject);
    this.render();
    // isvalyti input
    this.el.input.value = '';
  }

  deleteTodo(idOfTodoToBeDeleted) {
    console.log('idOfTodoToBeDeleted ===', idOfTodoToBeDeleted);
    // filtruojam state
    // grazinam visus todo objek iskyrus ta kurio id yra idOfTodoToBeDeleted
    App.state = App.state.filter((tObj) => tObj.id !== idOfTodoToBeDeleted);
    this.render();
  }

  toggleTodo(idOfTodoToBeToggled) {
    console.log('idOfTodoToBeToggled ===', idOfTodoToBeToggled);
    // psiaudo kodas
    // surasti objekta kurio id idOfTodoToBeToggled,
    const foundEl = App.state.find((tObj) => tObj.id === idOfTodoToBeToggled);
    console.log('foundEl ===', foundEl);
    // pakeisti jo isDone i priesinga
    foundEl.isDone = !foundEl.isDone;
    // atnaujinti sarasa su render()
    this.render();
  }
}

export default App;
