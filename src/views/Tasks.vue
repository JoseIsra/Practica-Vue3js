<template>
  <div class="m-tasks">
    <div class="m-tasks__leftSide">
      <div class="m-tasks__leftSide__header">
        <h2>Tareas de prioridad 
          <span v-titleColored="name">
            {{ name }}
            </span>
          </h2>
      </div>
      <div class="m-tasks__leftSide__content"
      v-borderCardContainer="name"
      >
        <div class="m-tasks__cards"
        :class="{isDone: todo.done}"
        v-for="todo in todosByPriorityOnPage"
        v-borderCard="todo.priority"
        :key="todo.id">
        <div class="m-tasks__cards__header">
          <h3 >
          Código: <span>{{ todo.code }}</span>
          </h3>
          <p>
            Desarrollador: 
            <span>{{ todo.userName }}</span>
          </p>
        </div>
        <div class="m-tasks__cards__content">
          <p>Estado:
            <span v-if="todo.done">Completado</span>
            <span v-else>Pendiente</span>
          </p>
          <div class="m-cards__buttons">
            <div class="m-cards__buttons__leftSide">
            <button 
            @click="selectThisTodo(todo.id)"
            class="-pressed"
            v-buttonStyle="todo.priority">
              Ver detalles
              </button>
            <p>
              Estado:
            <button @click="todo.done = !todo.done"
            class="-pressed"
            v-buttonStyle="todo.priority">pendiente/completada
            </button>
            </p>
            </div>  
            <div class="m-cards__buttons__rightSide">
            <button @click="deleteTodo(todo.id)">Eliminar</button>
            </div>              
          </div>
        </div>
        </div>
      </div>
    </div>

    <div class="m-tasks__rightSide">
      <TodoCards v-for="todo in tempTodos"
      v-borderCard="todo.priority"
      :key="todo.id" 
      :todo="todo"
      @deleteFromListTemp="deleteTempTodo"
      @deleteTodo="deleteTodo"></TodoCards>
    </div>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent, computed, ref, Ref,
} from 'vue';
import { useStore } from 'vuex';
import Itodo from '../utils/interfaces';
import { 
  borderCard, titleColored, borderCardContainer,
  buttonStyle,
} from '../directives/cards.';
import TodoCards from '../components/TodoCards.vue';
// EL value cuandos se usa ref no hay que olvidarlo x.x

export default defineComponent({
  name: 'Tasks',
  props: ['name'],
  components: { TodoCards },
  directives: { 
    borderCard, titleColored, borderCardContainer, buttonStyle,
  },  
  setup(props) {
    const store = useStore();
    let namePage = ref(props.name);
    let tempTodos:Ref<Itodo[]> = ref([]);
    const todosByPriorityOnPage = computed(
      () => store.getters.todosByPriority(namePage.value),
    );
    const deleteTempTodo = (id:string) => {
      tempTodos.value = tempTodos.value.filter((todo) => todo.id !== id);
    };

    const deleteTodo = (id:string) => {
      store.commit('deleteTodo', id);
      if (tempTodos.value.length > 0) {
        deleteTempTodo(id);
      }
    };
    const selectThisTodo = (id:string) => {
      tempTodos.value.push(todosByPriorityOnPage.value.find((todo:Itodo) => todo.id === id));
    };

    return {
      todosByPriorityOnPage,
      namePage,
      deleteTodo,
      selectThisTodo,
      tempTodos,
      deleteTempTodo,
    };
  },
});
</script>

<style lang="scss" scoped>
  .m-tasks {
    @extend %flexRowStyle;
    padding:5px;
    justify-content:space-between;
    height:auto;
    &__leftSide {
      padding:10px;
      flex:0.4;
      &__header{
        font-family:$poppins-font;
      }
      &__content {
        height: 75vh;
        overflow:auto;
        border-radius:1rem;
        &::-webkit-scrollbar{
          display:none;
        }
        .m-tasks__cards {
          padding:5px;
          width:90%;
          border-radius:10px;
          margin:0.5rem auto;
          cursor:pointer;
          &__header{
            @extend %flexRowStyle;
            justify-content:space-between;
          }
          &__content {
            padding:10px;
            p{
              font-family:$poppins-font;
              span{
                color:black;
                font-weight: bolder;
                font-size:1.3rem;
              }
            }
            .m-cards__buttons{
              @extend %flexRowStyle;
              position:relative;
              justify-content: space-between;
              &__leftSide{
                .-pressed{
                  &:active {
                    transform:scale(0.9);
                  }
                }
                button {
                  margin:3px 0;
                  padding:10px;
                  color:white;
                  font-size:1rem;
                  border-radius:0.4rem;
                  outline:none;
                  cursor:pointer;
                }
              }
              &__rightSide {
                position:absolute;
                bottom:10px;
                right:10px;
                button {
                  font-size:1.2rem;
                  padding:10px;
                  border-color:lightgray;
                  border-radius:10px;
                  color:rgba(255,255,255,.6);
                  font-weight: bolder;
                  background-color: $danger-background;
                  cursor:pointer;
                }
              }
            }
          }
        } 
        .isDone {
        opacity:0.7;
        }
      }
    }
    &__rightSide {
      flex:0.6;
      border:1px solid black;
      padding:5px;
      @extend %flexRowStyle;
      height:100vh;
      overflow: auto;
      
    }
  }

  
</style>
