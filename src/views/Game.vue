<template>
<div class="o-game">
  <div class="m-game">
  <p class="a-game__title">Clásicos de clásicos</p>
  <div class="m-game__screen">
    <p class="a-screen__one">{{numero1}}</p>
    <p class="a-screen__two">{{operacion}}</p>
    <p class="a-screen__three">{{ numero2 }}</p>
    <p class="a-screen__three">{{ result }}</p>
  </div>
  <div class="m-game__container" >
    <div class="m-game__functions">
      <button @click="clearAllTheScreen">Clear</button>
      <button @click="doMath">&#61;</button>
      <button @click="deleteOneCharacter">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>
      </button>
    </div>
    <div class="m-game__content" >
      <div class="m-game__numbers" @click="apachurra">
        <button data-numero="1">1</button>
        <button data-numero="2">2</button>
        <button data-numero="3">3</button>
        <button data-numero="4">4</button>
        <button data-numero="5">5</button>
        <button data-numero="6">6</button>
        <button data-numero="7">7</button>
        <button data-numero="8">8</button>
        <button data-numero="9">9</button>
        <button data-numero="0">0</button>
      </div>
      <div class="m-game__symbols" @click="apachurra">
        <button data-operacion="+">+</button>
        <button data-operacion="-">-</button>
        <button data-operacion="*">*</button>
        <button data-operacion="/">/</button>
      </div>
    </div>

  </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import calculateWidth from '../utils/mathOperation';

type solution = number | string;
export default defineComponent({
  name: 'Game',
  setup() {
    let numero1 = ref('');
    let numero2 = ref('');
    let operacion = ref('');
    let result = ref('');

    const letRenderNumber = (mynumber:string) => {
      if (numero1.value.length === 0) {
        numero1.value = mynumber;
      } else {
        numero1.value += mynumber;
      }
    };
    const letOperate = (mysymbol:string) => {
      operacion.value = mysymbol;
      numero2.value = numero1.value;
      numero1.value = '';
    };

    /* eslint-disable  */
    const apachurra = (e:any) => {                                  
      if (/[0-9]/.test(e.target.dataset.numero)) {
          letRenderNumber(e.target.dataset.numero);
      } else {
          letOperate(e.target.dataset.operacion);
      }
    };

    const deleteOneCharacter = () => {
      numero1.value = numero1.value.substring(0,numero1.value.length - 1);
    };

    const clearAllTheScreen = () => {
      numero1.value = '';
      numero2.value = '';
      operacion.value = '';
      result.value = '';
    };

    const doMath = () => {
      result.value = calculateWidth(numero1.value, numero2.value, operacion.value).toString();
      console.log(calculateWidth(numero1.value, numero2.value, operacion.value).toString());
    };

    return {
      apachurra,
      numero1,
      numero2,
      operacion,
      deleteOneCharacter,
      clearAllTheScreen,
      doMath,
      result,
    };
  },
});
</script>

<style lang="scss" scoped>
  .o-game{
    height:90vh;
    @extend %flexRowStyle;
    justify-content:center;
    align-items:center;
    .m-game{
      width:35vw;
      padding:20px;
      border:1px solid blue;
      .a-game__title{
        font-size:1rem;
        
      }
      &__screen {
        border:1px solid red;
        @extend %flexColumnStyle;
        padding:5px;
        width:100%;
        height:100px;
      }
      &__container {
        padding:10px;
        @extend %flexColumnStyle;
        .m-game__functions {
          @extend %flexRowStyle;
          justify-content: space-between;
          button {
            padding: 10px;
          }
        }
      }
      &__content {
        @extend %flexRowStyle;
        justify-content:space-between;
        .m-game__numbers {
          padding:10px;
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          width:200px;
          border:1px solid red;
          button {
            padding:5px;
            font-size:1rem;
            width:50px;
          }
        }
        .m-game__symbols {
          padding:10px;
          button {
            padding:10px;
            font-size:1rem;
            margin:0 0.3rem;
          }
        }
      }
    }
  }
</style>
