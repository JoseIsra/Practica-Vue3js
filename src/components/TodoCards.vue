<template>
  <div class="m-todo">
    <div class="m-todo__header">
      <h4 class="a-header__code">Cod:{{todo.code}}</h4>
      <button @click="$emit('deleteFromListTemp',todo.id)"
      class="a-header__button">&#88;</button>
    </div>
    <div class="m-todo__dataUser">
      <div class="m-dataUser__info">
      <label >Desarrollador:</label>
      <p>{{todo.userName}}</p>
      </div>

      <div class="m-dataUser__tasks">
        <p>Área: {{todo.area}}</p>
        <p>Estado:
          <span v-if="todo.done">completado</span>
          <span v-else>pendiente</span>
        </p>
      </div>
    </div>
    <div class="m-todo__task">
      <label>Tarea asignada:</label>
      <textarea rows="7" disabled :value="todo.userTask">
      </textarea>
    </div>
    <button
    class="a-card__button"
    @click="$emit('deleteTodo',todo.id)">ELiminar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoCards',
  props: ['todo'],
  
});
</script>

<style lang="scss" scoped>
  .m-todo {
    padding:10px;
    width:325px;
    margin:5px;
    height:320px;;
    border-radius:10px;
    @extend %flexColumnStyle;
    &__header{
      @extend %flexRowStyle;
      align-items:center;
      justify-content: space-between;
      .a-header__button {
        padding:5px;
        background-color: transparent;
        font-size:1rem;
        border-radius:10px;
      }
    }
    &__dataUser{
      @extend %flexRowStyle;
      align-items:center;
      margin-top:5px;
      justify-content: space-between;
      .m-dataUser__info {
          label {
            font-size:0.9rem;
          }
          p {
            margin-left:5px;
            width:100px;
            font-size:0.9rem;
            font-weight:bolder;
            word-break: break-all;
          }
      }
      .m-dataUser__tasks{
        p {
          font-size:0.8rem;
          font-weight:bolder;
          font-family:$poppins-font;
        }
      }
    }
    &__task{
      @extend %flexColumnStyle;
      textarea{
        padding:5px;
        resize:none;  
        margin-left:15px;
      }
    }
    .a-card__button{
      margin-top:10px;
      font-size:1.2rem;
      padding:5px;
      border-color:white;
      border-radius:10px;
      color:rgba(255,255,255,.6);
      font-weight: bolder;
      background-color: $danger-background;
      cursor:pointer;
    }

  }
</style>
