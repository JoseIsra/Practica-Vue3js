<template>
  <footer class="footer">
    <p>Footer con Vu3</p>
    <p>Aprendiendo Vue3</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">
.footer {
  padding:40px;
  background-color: black;
  
  p {
    color:white;
    font-weight: bolder;
    font-size:1.5rem;
    text-align:center;
  }
}
</style>
