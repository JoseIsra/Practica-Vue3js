
interface Istate {
  title:string,
}
/* eslint-disable */
const state:Istate = {
  title: '',
};

const mutations = {
  stablishTitle(state:Istate, payload:any) {
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
};

const actions = {
  stablishAsync({ commit }:any, payload:any) {
    commit('stablishTitle', payload);
  },
};

export default {
  state,
  mutations,
  actions,
};
