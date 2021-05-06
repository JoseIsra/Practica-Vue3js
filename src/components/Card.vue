<template>
    <div v-if="photo" class="m-card__character">
      <div class="o-card__picture">
        <img alt="foto" :src="photo" />
      </div>
      <div class="characterContent">
      <p><strong>Nombre: </strong>{{ name }}</p>
      <p><strong>Estado: </strong>{{ status }}</p>
      <p><strong>Especie: </strong>{{ species }}</p>
      </div>
    </div>
    <div v-else-if="type" class="m-card__location">
      <h3>{{name}}</h3>
      <div class="locationContent">
      <p><strong>Tipo de lugar: </strong>{{type}}</p>
      <p v-if="dimension!=='unknown'"><strong>Dimensión: </strong>{{dimension}}</p>
      <p v-else><strong>Dimensión: </strong>Desconocida</p>
      </div>
    </div>
    <div v-else class="m-card__episode">
      <h3>{{ name }}</h3>
      <div class="episodeContent">
      <p><strong>Nombre clave: </strong>{{ episode }}</p>
      <p><strong>Estrenado el: </strong>{{ air_date }}</p>
      </div>
    </div>
  
</template>

<script>
export default {
  name: 'Card',
  props: ['name', 'photo', 
    'status', 'species', 'type', 'dimension', 'episode', 'air_date'],
};
</script>

<style lang="scss" scoped>
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
    .o-card__picture{
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
