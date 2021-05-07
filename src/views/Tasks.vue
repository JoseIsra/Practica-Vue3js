<template>
  <div class="m-tasks">
    <div class="m-tasks__leftSide">
      <div class="m-tasks__leftSide__header">
        <h2>Tareas de prioridad 
          <span >
            {{ name }}
            </span>
          </h2>
      </div>
      <div class="m-tasks__leftSide__content">
        <div class="m-tasks__cards"
        v-for="todo in todosByPriorityOnPage" 
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
            <button>Ver detalles</button>
            <p>
              Estado:
            <button>pendiente/completada</button>
            </p>
            </div>  
            <div class="m-cards__buttons__rightSide">
            <button>Eliminar</button>
            </div>              
          </div>
        </div>
        </div>
      </div>
    </div>

    <div class="m-tasks__rightSide">
      se renderiza la tarea seleccionada
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
// EL value cuandos se usa ref no hay que olvidarlo x.x

export default defineComponent({
  name: 'Tasks',
  props: ['name'],
  setup(props) {
    const store = useStore();
    let namePage = ref(props.name);
    const todosByPriorityOnPage = computed(
      () => store.getters.todosByPriority(namePage.value),
    );
    
    return {
      todosByPriorityOnPage,
      namePage,
    };
  },
});
</script>

<style lang="scss" scoped>
  .m-tasks {
    @extend %flexRowStyle;
    border:1px solid red;
    padding:5px;
    justify-content:space-between;
    height:auto;
    &__leftSide {
      border:1px solid blue;
      padding:10px;
      flex:0.4;
      &__header{
        font-family:$poppins-font;
      }
      &__content {
        border:1px solid black;
        @extend %flexColumnStyle;
        height:70vh;
        overflow:auto;
        ::-webkit-scrollbar{
          display:none;
        }
        .m-tasks__cards {
          border:1px solid black;
          padding:5px;
          width:90%;
          margin:0.5rem auto;
          cursor:pointer;
          &__header{
            @extend %flexRowStyle;
            justify-content:space-between;
          }
          &__content {
            padding:10px;
          }
        } 
      }
    }
    &__rightSide {
      flex:0.6;
    }
  }
</style>
