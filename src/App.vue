<template>
  <div class="o-app">
    <Header>
      <template v-slot:rightForm>
        <div  class="m-headerForm">
          <input>
          <button >
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>
      </template>
    </Header>
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default defineComponent({
  name: 'App',
  components: { Header, Footer },
});
</script>

<style lang="scss">
@import './globals/fonts.scss';
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
body {
  height: 100vh;
  display:flex;
  flex-direction: column;
}

.o-app {
  background-color: white;
  min-height:100%;
  position:relative;
}
.m-headerForm
{
  width:100%;
  padding: 10px;
  @extend %flexRowStyle;
  input {
    padding:10px;
    font-weight:bolder;
    font-size:17px;
    margin-right: 0.5rem;
    border:1px solid lightgray;
    border-radius:10px;
    color:white;
    background-color: transparent;
    outline:none;
  }
  button {
    background-color: transparent;
    border:none;
    outline:none;
    cursor:pointer;
    svg:hover {
      stroke:$rick-green;
    }
  }
}

</style>
