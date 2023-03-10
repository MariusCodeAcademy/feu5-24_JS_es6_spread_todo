const storageName = 'todos';

export function store(arr) {
  localStorage.setItem(storageName, JSON.stringify(arr));
}

// patikrinti ar yra duomenys localStorage ir grazinti juos jei yra
// null, ar undefined, jei nera
export function loadStore() {
  const dataFromStore = localStorage.getItem(storageName);
  const dataInJs = JSON.parse(dataFromStore);
  // console.log('dataInJs ===', dataInJs);
  return dataInJs;
}
