<template>
  <div class="m-form__todo">
    <form @submit.prevent="saveTodo" class="fofo">
      <input v-model="userInput" type="text" placeholder="nuevo todo...">
      <button type="submit">Save</button>
    </form>
  </div>
  <div class="m-form__list">
    <div class="todo" v-for="todo in todoList" :key="todo.id">
      <p>{{todo.text}}</p>
      <p>{{todo.id}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
// No olvidar el Ref para los tipos de datos!!!!
  interface Itodo {
    id: string,
    text:string,
  }

export default defineComponent({
  name: 'Home',
  setup() {
    const userInput:Ref<string> = ref('');
    let todoList:Ref<Itodo[]> = ref([]);

    const saveTodo = () => {
      const newTodo:Itodo = {
        id: new Date().toString().substring(0, 8),
        text: userInput.value,
      };
      todoList.value.push(newTodo);
    };

    return {
      userInput,
      saveTodo,
      todoList,
    };
  },
});
</script>

<style scoped lang="scss">
  .m-form__todo{
    padding: 10px;
    border:1px solid black;
    width:40vw;
    form {
      padding:10px;
      input {
        padding:5px;
        font-size:20px;
      }
      button {
        padding:10px;
        font-size:1rem;
      }
    }
  }

</style>
