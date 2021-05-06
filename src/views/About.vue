<template>
  <div class="o-about__content">
  <div class="m-form__todo">
    <form @submit.prevent="saveTodo" class="fofo">
      <div class="m-form__fields">
        <label>Codigo: </label>
      <input v-model="userInput.userCode" type="text" >
      </div>
      <div class="m-form__fields">
        <label>Usuario: </label>
      <input v-model="userInput.name" type="text" >
      </div>
      <div class="m-form__fields">
        <label>Tarea: </label>
      <input v-model="userInput.task">
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
  <div class="m-todos__list">
    <div class="m-todo" v-for="todo in todoList" :key="todo.id">
      <p>Codigo: {{todo.code}}</p>
      <p>Usuario: {{todo.userName}}</p>
      <p>Tarea: {{todo.userTask}}</p>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent, Ref, ref, reactive,
} from 'vue';
import { nanoid } from 'nanoid';
// No olvidar el Ref para los tipos de datos!!!!
  interface Itodo {
    id: string,
    code:string,
    userName:string,
    userTask:string,
  }

export default defineComponent({
  name: 'About',
  setup() {
    const userInput = reactive({
      name: '',
      userCode: '',
      task: '',
    });
    let todoList:Ref<Itodo[]> = ref([]);

    const saveTodo = () => {
      const newTodo:Itodo = {
        id: nanoid(7),
        code: userInput.userCode,
        userName: userInput.name,
        userTask: userInput.task,
      };
      todoList.value.push(newTodo);
      userInput.name = '';
      userInput.userCode = '';
      userInput.task = '';
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
  .o-about__content{
    height:100vh;
  }

  .m-form__todo{
    padding: 10px;
    border:1px solid black;
    width:40vw;
    height: 30%;
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
  .m-todos__list {
    padding:10px;
    border:1px solid black;
    height:70%;
  }


</style>
