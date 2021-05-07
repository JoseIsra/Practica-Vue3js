<template>
  <div class="o-container">
    <div class="m-form">
      <h1 class="a-form__heading">Agregue tarea nueva</h1>
      <form @submit.prevent="saveTodo" class="m-form__content" autocomplete="off">
        <div class="m-form__fields">
          <label class="a-label">Codigo: </label>
          <input autofocus
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
      <div class="m-cards__priorities -unchiste">Un chiste</div>
      <div class="m-cards__priorities -normal">Un chiste</div>
      <div class="m-cards__priorities -regular">Un chiste</div>
      <div class="m-cards__priorities -miedo">Un chiste</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { nanoid } from 'nanoid';
import { useStore } from 'vuex';
import Itodo from '../utils/interfaces';
// No olvidar el Ref para los tipos de datos!!!!

export default defineComponent({
  name: 'About',
  setup() {
    const store = useStore();
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
        priority: selectedPriority.value,
      };
      store.commit({
        type: 'addTodo',
        newTodo,
      });
      userInput.userCode = '';
      userInput.name = '';
      userInput.task = '';
      selectedArea.value = '';
      selectedPriority.value = '';
    };

    return {
      userInput,
      saveTodo,
      selectedArea,
      selectedPriority,
    };
  },
});
</script>

<style scoped lang="scss">
.o-container {
  padding:10px;
  background-color:$semigreen-background;
  @extend %flexRowStyle;
  height:85vh;
}
  .m-form{
    padding:10px;
    flex:0.3;
    .a-form__heading {
      color:$semidark-green;
      font-family:$poppins-font;
      font-size:1.6rem;
    }
    &__content {
      border:1px solid gray;
      border-radius:12px;
      width:100%;
      padding:10px;
      height:auto;
      @extend %flexColumnStyle;
    }
    &__fields{
      padding:10px;
      margin:0.8rem auto;
        @extend %flexRowStyle;
      .a-label {
        font-family:$poppins-font;
        font-weight:bolder;
        align-items: center;
        margin-right:0.2rem;
      }
      .a-input {
        font-size:0.9rem;
        background-color:transparent;
        border:none;
        border-bottom:3px solid $semidark-green;
        outline:none;
      }
      &__select {
        font-size:22px;
        background-color:transparent;
        padding:4px;
        border-radius:5px;
        cursor:pointer;
      }
    }
    .a-submit__button {
      padding:10px;
      background-color:transparent;
      font-size:1.5rem;
      color:$semidark-green;
      border:2px solid $rick-green;
      cursor:pointer;
      &:hover {
        background-color:$rick-green;
        letter-spacing: 7px;
        color:white;
      }
    }

  }
  .m-cards{
    flex:0.7;
    @extend %flexColumnStyle;
    border:1px solid black;
    padding:20px;
    justify-content: center;
    align-items: center;
    &__priorities {
      padding:30px;
      width:80%;
      height:100px;
      margin:0.6rem auto;
      border:1px solid black;
      border-radius:10px;
    }
  }

</style>
