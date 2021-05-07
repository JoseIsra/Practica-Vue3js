<template>
  <div class="o-card__container">
    <exp-card v-for="part in data" :key="part.id">
      <template v-slot:hardContent>
        <div v-if="part.image" class="m-card__character">
          <div class="a-card__picture">
            <img alt="foto" :src="part.image" />
          </div>
          <div class="characterContent">
            <p><strong>Nombre: </strong>{{ part.name }}</p>
            <p><strong>Estado: </strong>{{ part.status }}</p>
            <p><strong>Especie: </strong>{{ part.species }}</p>
          </div>
        </div>

        <div v-else-if="part.type" class="m-card__location">
          <h3>{{ part.name }}</h3>
          <div class="locationContent">
            <p><strong>Tipo de lugar: </strong>{{ part.type }}</p>
            <p v-if="part.dimension !== 'unknown'">
              <strong>Dimensión: </strong>{{ part.dimension }}
            </p>
            <p v-else><strong>Dimensión: </strong>Desconocida</p>
          </div>
        </div>

        <div v-else class="m-card__episode">
          <h3>{{ part.name }}</h3>
          <div class="episodeContent">
            <p><strong>Nombre clave: </strong>{{ part.episode }}</p>
            <p><strong>Estrenado el: </strong>{{ part.air_date }}</p>
          </div>
        </div>
      </template>
    </exp-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExpCard from './layout/Cards.vue';
import helper from './mixFeed';

export default defineComponent({
  name: 'BlockCards',
  props: ['data'],
  components: { ExpCard },
  mixins: [helper],
});
</script>

<style lang="scss" scoped>
.o-card__container {
  border: 2px solid $rick-green;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  width: 50%;
  overflow: auto;
  @extend %flexRowStyle;
  justify-content: space-around;
  &::-webkit-scrollbar {
    display: none;
  }
}

  p{
    font-family: $poppins-font;
    color:white;
  }
  h3 {
      text-align: center;
      font-family:$poppins-font;
      border-bottom:1px solid $rick-green;
      color:white;
    }
  .m-card__character {
    width:160px;
    margin:0.5rem 0;
    border:1px solid $rick-green;
    .a-card__picture{
      width:100%;
      img {
        width:100%;
        object-fit: contain;
      }
    }
    .characterContent {
      padding:10px;
      p {
        font-size:0.8rem;
        line-height: 20px;
      }
    }
  }
  .m-card__location {
    padding:5px;
    border:1px solid black;
    margin:0.5rem 0;
    border-radius:10px;

    .locationContent {
      padding:10px;
    }
  }

  .m-card__episode {
    padding:5px;
    border:1px solid black;
    border-radius:5px;
    margin:0.4rem auto;
    .episodeContent {
      padding:10px;
      p {
        font-size:0.8rem;
      }
    }
  }



</style>
