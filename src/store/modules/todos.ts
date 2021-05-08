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
  addTodo(state:ItodoList, newTodo:Itodo ) {
    state.todoList.push(newTodo);
  },
  deleteTodo(state:ItodoList, id:string) {
    state.todoList = state.todoList.filter((todo) => todo.id !== id);
  }
};

export default {
  state, 
  getters,
  mutations,
};
