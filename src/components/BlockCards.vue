<template>
  <div class="o-card__container">
    <Card 
    v-for="item in data" :key="item.id"
    v-bind="completeCard(item).attrs" />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from './Card.vue';
import helper from './mixFeed';

export default defineComponent({
  name: 'BlockCards',
  props: ['data'],
  components: { Card },
  mixins: [helper],
});
</script>

<style lang="scss" scoped> 
  .o-card__container{
    border:2px solid $rick-green;
    border-radius:10px;
    padding:20px;
    height:50vh;
    width:50%;
    overflow:auto;
    @extend %flexRowStyle;
    justify-content: space-around;
    &::-webkit-scrollbar {
      display:none;
    }
  }
</style>
