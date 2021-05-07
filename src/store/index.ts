import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import Itodo from '../utils/interfaces';
/* eslint-disable */
export interface State {
    title: string,
    todos: Itodo[],
  }

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    title: 'aaaa',
    todos: [],
  },
  mutations: {
    stablishTitle(state, payload) {
      let name;
      if (payload.newTitle === 'character') {
        name = 'Personajes';
      } else if (payload.newTitle === 'location') {
        name = 'Lugares';
      } else {
        name = 'Episodios';
      }
      state.title = name;
    },

    addTodo(state, payload) {
      state.todos.push(payload.newTodo);
    },
  },
  actions: {
    stablishAsync({ commit }, payload) {
      commit('stablishTitle', payload);
    },
  },
  modules: {
  },
});

export function useStore() {
  return baseUseStore(key);
}

