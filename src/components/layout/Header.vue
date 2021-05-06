<template>
<header class="header">
  <div class="header__logo">
    <img src="http://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Pic-180x180.png">
    <h1>{{ title }}</h1>
  </div>
  <div class="header__navigationOptions">
    <router-link to="/">Inicio</router-link>
    <router-link :to="{ name: 'About' }">Ejercicio1</router-link>
    <router-link :to="{ name: 'Game' }">Ejercicio2</router-link>
  </div>
  <div class="header__form">
    <slot name="rightForm">auxilio</slot>
  </div>
</header>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const title = ref('Rick y Morty');
    return {
      title,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  padding:20px;
  background-color: $default-color;
  display:flex;
  justify-content: space-around;
  align-items:center;
}
  .header__logo
  {
    display:flex;
    align-items:center;
    justify-content:center;
    img {
      object-fit:contain;
      width:110px;
    }
    h1 {
      font-family:$the-font;
      color:white;
      font-weight: bolder;
      letter-spacing: 3px;
      text-shadow:0 0 2px rgba(5, 175, 104, 0.966),
      0 0 4px rgba(5, 175, 104, 0.966);
    }
  }

.header__navigationOptions {
  & > a{
    display:inline-block;
    margin:0 2rem;
    border:2px solid $rick-green;
    border-radius:10px;
    color:white;
    font-family:$poppins-font;
    font-weight:bolder;
    padding: 10px;
    outline:none;
    text-decoration: none;
    &:hover {
      color:lightgray;
    }
  }
}
.header__form{
  padding:10px;
}


</style>
