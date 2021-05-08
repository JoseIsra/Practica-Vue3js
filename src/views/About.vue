<template>
  <div class="o-container">
    <div class="m-form">
      <h1 class="a-form__heading">Agregue tarea nueva</h1>
      <form
        @submit.prevent="saveTodo"
        class="m-form__content"
        autocomplete="off"
      >
        <div class="m-form__fields">
          <label class="a-label">Codigo: </label>
          <input
            autofocus
            class="a-input"
            data-testid="code-input"
            v-model="userInput.userCode"
            type="text"
          />
        </div>
        <div class="m-form__fields">
          <label class="a-label">Usuario: </label>
          <input class="a-input" v-model="userInput.name" type="text" />
        </div>
        <div class="m-form__fields">
          <label class="a-label">Tarea: </label>
          <input class="a-input" v-model="userInput.task" />
        </div>
        <div class="m-form__fields">
          <label class="a-label">Area: </label>
          <select v-model="selectedArea" class="m-form__fields__select">
            <option disabled value="">Seleccione</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>DevOps</option>
            <option>UX</option>
          </select>
        </div>
        <div class="m-form__fields">
          <label class="a-label">Prioridad: </label>
          <select v-model="selectedPriority" class="m-form__fields__select">
            <option disabled value="">Seleccione</option>
            <option>Un chiste</option>
            <option>Normal</option>
            <option>Regular</option>
            <option>Tengo miedo</option>
          </select>
        </div>
        <button class="a-submit__button" type="submit">Save</button>
      </form>
    </div>
    <div class="m-cards">
      <p class="a-cards__header">Revisa aquellas tareas que necesites</p>
      
      <div 
      @click="goToPriority('Un chiste')"
      class="m-cards__priorities -unchiste">
        <div class="m-cards__priorities__heading">
          <p>
            Prioridad
            <span class="a-cards__priorities__subheading">Un chiste</span>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="green"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-smile"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>
        <div class="m-cards__priorities__content">
          <h3>Tareas existentes<span>({{ jokeTodosCount }})</span></h3>
        </div>
      </div>
      <div 
      @click="goToPriority('Normal')"
      class="m-cards__priorities -normal">
        <div class="m-cards__priorities__heading">
          <p>
            Prioridad
            <span class="a-cards__priorities__subheading">normal</span>
          </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <div class="m-cards__priorities__content">
          <h3>Tareas existentes<span>({{ normalTodosCount }})</span></h3>
        </div>
      </div>
      <div
      @click="goToPriority('Regular')"
      class="m-cards__priorities -regular">
        <div class="m-cards__priorities__heading">
          <p>
            Prioridad
            <span class="a-cards__priorities__subheading">regular</span>
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <div class="m-cards__priorities__content">
          <h3>Tareas existentes<span>({{ regularTodosCount }})</span></h3>
        </div>
      </div>
      <div 
      @click="goToPriority('Tengo miedo')"
      class="m-cards__priorities -miedo">
        <div class="m-cards__priorities__heading">
          <p>
            Prioridad
            <span class="a-cards__priorities__subheading">asústate</span>
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
        </div>
        <div class="m-cards__priorities__content">
          <h3>Tareas existentes<span>({{ scareTodosCount }})</span></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { nanoid } from 'nanoid';
import { useStore } from 'vuex';
import Itodo from '../utils/interfaces';
import counterTodos from '../utils/helpersTodos';
// No olvidar el Ref para los tipos de datos!!!!

export default defineComponent({
  name: 'About',
  setup() {
    const store = useStore();
    const router = useRouter();
    const { 
      jokeTodosCount,
      normalTodosCount,
      regularTodosCount,
      scareTodosCount,
    } = counterTodos();
    let selectedArea = ref('');
    let selectedPriority = ref('');
    const userInput = reactive({
      userCode: '',
      name: '',
      task: '',
    });
    const saveTodo = () => {
      const newTodo: Itodo = {
        id: nanoid(7),
        code: userInput.userCode,
        userName: userInput.name,
        userTask: userInput.task,
        area: selectedArea.value,
        done: false,
        priority: selectedPriority.value,
      };
      store.commit('addTodo', newTodo);
      userInput.userCode = '';
      userInput.name = '';
      userInput.task = '';
      selectedArea.value = '';
      selectedPriority.value = '';
    };

    const goToPriority = (query:string) => {
      router.push({
        name: 'Tasks',
        query: {
          name: query,
        },
      });
    };


    return {
      userInput,
      saveTodo,
      selectedArea,
      selectedPriority,
      jokeTodosCount,
      normalTodosCount,
      regularTodosCount,
      scareTodosCount,
      goToPriority,
    };
  },
});
</script>

<style scoped lang="scss">
.o-container {
  padding: 5px;
  background-color: $semigreen-background;
  @extend %flexRowStyle;
  
}
.m-form {
  padding: 5px;
  flex: 0.3;
  .a-form__heading {
    color: $semidark-green;
    font-family: $poppins-font;
    font-size: 1.6rem;
  }
  &__content {
    border: 1px solid gray;
    border-radius: 12px;
    width: 100%;
    padding: 10px;
    height: auto;
    @extend %flexColumnStyle;
  }
  &__fields {
    padding: 10px;
    margin: 0.8rem auto;
    @extend %flexRowStyle;
    .a-label {
      font-family: $poppins-font;
      font-weight: bolder;
      align-items: center;
      margin-right: 0.2rem;
    }
    .a-input {
      font-size: 0.9rem;
      background-color: transparent;
      border: none;
      border-bottom: 3px solid $semidark-green;
      outline: none;
    }
    &__select {
      font-size: 22px;
      background-color: transparent;
      padding: 4px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .a-submit__button {
    padding: 10px;
    background-color: transparent;
    font-size: 1.5rem;
    color: $semidark-green;
    border: 2px solid $rick-green;
    cursor: pointer;
    &:hover {
      background-color: $rick-green;
      letter-spacing: 7px;
      color: white;
    }
  }
}
.m-cards {
  flex: 0.7;
  .a-cards__header {
    font-family: $poppins-font;
    font-weight: bolder;
    font-size:1.3rem;
  }
  @extend %flexColumnStyle;
  justify-content: center;
  padding: 10px;
  align-items: center;
  &__priorities {
    width: 80%;
    height: 120px;
    margin: 0.5rem auto;
    box-shadow:0 5px 10px rgba(0,0,0,.6);
    transition:all 0.2s ease-out;
      cursor:pointer;
    &:hover{
      transform:scale(1.05);
    }
    &__heading {
      @extend %flexRowStyle;
      justify-content: space-between;
      padding: 5px;
      p{
        color:rgba(255,255,255,0.9);
        font-family:$poppins-font;
      }
      span {
        color:white;
        font-weight: bolder;
        font-size:1.3rem;
      }
    }
    &__content {
      padding: 10px;
      margin: 0.5rem 0;
      h3{
        font-family:$poppins-font;
        color:black;
      }
    }
  }
}

.-unchiste{
  background-color: $light-green;
  border-radius:12px;
}
.-normal {
  background-color:$cool-sky-blue;
  border-radius:12px;
}
.-regular {
  background-color:$regular-back;
  border-radius:12px;
}
.-miedo {
  background-color:$danger-background;
  border-radius:12px;
}
</style>
