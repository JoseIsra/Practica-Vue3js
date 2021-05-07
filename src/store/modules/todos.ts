import Itodo from '../../utils/interfaces';

interface ItodoList {
  todoList:Itodo[],
}
const state:ItodoList = {
  todoList: [],
};
/* eslint-disable */
// getters
const getters = {
  todosByPriority:(state:ItodoList) => (query:string) => { 
    return state.todoList.filter((todo:Itodo) => todo.priority === query);
  },
  countTodosByPriority:(state:ItodoList, getters:any) => (query:string) => {
    return getters.todosByPriority(query).length;
  }
};

// mutations
const mutations = {
  addTodo(state:ItodoList, payload:any) {
    state.todoList.push(payload.newTodo);
  },
};

export default {
  state, 
  getters,
  mutations,
};
