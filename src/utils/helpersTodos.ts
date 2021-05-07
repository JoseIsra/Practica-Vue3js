/* eslint-disable */
import { useStore } from 'vuex';
import { computed } from 'vue';

export default function counterTodos() {
  const store = useStore();
  return {
    jokeTodosCount: computed(() => store.getters.countTodosByPriority('Un chiste')),
    normalTodosCount: computed(() => store.getters.countTodosByPriority('Normal')),
    regularTodosCount: computed(() => store.getters.countTodosByPriority('Regular')),
    scareTodosCount: computed(() => store.getters.countTodosByPriority('Tengo miedo')),
  }; 
}
