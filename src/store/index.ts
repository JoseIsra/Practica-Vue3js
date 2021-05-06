import { createStore } from 'vuex';

export default createStore({
  state: {
    title: '',
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
  },
  actions: {
    stablishAsync({ commit }, payload) {
      commit('stablishTitle', payload);
    },
  },
  modules: {
  },
});
