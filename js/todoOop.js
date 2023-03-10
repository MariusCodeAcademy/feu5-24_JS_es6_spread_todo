import App from './class/App.js';
import { INIT_STATE } from './modules/helper.js';
import { loadStore } from './modules/storage.js';

// let state = loadStore() ? loadStore() : [...INIT_STATE];
let state = loadStore() || [...INIT_STATE];

new App(state);

// local storage support

// kiekvienam pasikeitimui ivykus mes irasom i localStorage
// store([1, 2, 4]);
// tik uzsikrovus aplikacijai, patikrinam ar turim reiksmiu localStorage
// loadStore();
// jei turim naudojam,

// jei ne imam INIT_STATE
