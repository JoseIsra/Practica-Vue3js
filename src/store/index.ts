import { createStore } from 'vuex';
import todos from './modules/todos';
import versatilTitle from './modules/versatilTitle';
/* eslint-disable */


export const store = createStore({
  modules: {
    todos,
    versatilTitle,
  },
});
