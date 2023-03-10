export const INIT_STATE = [
  { id: 't_001', title: 'Learn HTML', isDone: true },
  { id: 't_002', title: 'Learn CSS', isDone: true },
  { id: 't_003', title: 'Learn JS', isDone: false },
  { id: 't_004', title: 'Learn GIT', isDone: false },
];

let mainId = 4;

export function newId() {
  mainId++;
  return `t_${mainId.toString().padStart(3, '0')}`;
}
