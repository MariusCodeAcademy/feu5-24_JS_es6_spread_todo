// const storageName = 'todos';

// export function store(arr) {
//   localStorage.setItem(storageName, JSON.stringify(arr));
// }

// // patikrinti ar yra duomenys localStorage ir grazinti juos jei yra
// // null, ar undefined, jei nera
// export function loadStore() {
//   const dataFromStore = localStorage.getItem(storageName);
//   const dataInJs = JSON.parse(dataFromStore);
//   // console.log('dataInJs ===', dataInJs);
//   return dataInJs;
// }

// AI

const storageName = 'todos';

/**
 * Save the given array to local storage.
 * @param {Array} [arr=[]] - The array to store.
 */
export function store(arr = []) {
  try {
    localStorage.setItem(storageName, JSON.stringify(arr));
  } catch (error) {
    console.error('Error storing data to local storage:', error);
  }
}

/**
 * Load data from local storage and parse it as JSON.
 * @returns {Array|null|undefined} - The data stored in local storage, or null if no data is found.
 */
export function loadStore() {
  try {
    const dataFromStore = localStorage.getItem(storageName);
    const dataInJs = JSON.parse(dataFromStore);
    return dataInJs;
  } catch (error) {
    console.error('Error loading data from local storage:', error);
    return null;
  }
}
