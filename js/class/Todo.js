class Todo {
  static count = 0;
  id;
  title;
  isDone;

  constructor(title) {
    this.id = this.makeId();
    this.title = title;
    this.isDone = false;
  }

  makeId() {
    Todo.count++;
    return `t_${Todo.count.toString().padStart(3, '0')}`;
  }
}

export default Todo;
