<template>
  <div class="m-main__welcome">
    <div class="m-main__photo">
      <img src="https://images6.alphacoders.com/909/thumbbig-909641.png">
      <p>Conoce Rick y Morty aprendiendo Vue</p>
    </div>
    <div class="m-main__text">
      <p>Res una serie de televisión estadounidense de
        animación para adultos creada por Justin Roiland 
        y Dan Harmon en 2013 para Adult Swim. La serie
        sigue las desventuras de un científico, Rick, y su fácilmente influenciable nieto, 
        Morty, quienes pasan el tiempo entre la vida
        doméstica y los viajes espaciales, temporales 
        e intergalácticos. Roiland es el encargado
        de darle voz a los dos personajes principales1​2​y
        laserie también incluye las vocesde Chris ParnelSpencer Grammer y Sarah Chalke.</p>
    </div>
  </div>
  <div class="m-container">
    <div class="m-container__leftSide">
      <h1>Infórmate de personajes, lugares y episodios</h1>
      <div class="m-container__leftSideContent">
        <ul>
          <li>
            <button :class="{ 'isActive': myTitle === 'Personajes'}"
              @click="search('character')">Personajes</button>
          </li>
          <li>
            <button :class="{ 'isActive': myTitle === 'Lugares'}" 
              @click="search('location')" >Lugares</button>
          </li>
          <li>
            <button :class="{ 'isActive': myTitle === 'Episodios'}" 
              @click="search('episode')">Episodios</button>
          </li>
        </ul>
      </div>
      <p class="a-leftSide__title">Lee sobre: {{ myTitle }}</p>
    </div>
    <BlockCards :data="result" />
  </div>

  <div class="m-info">
    <div class="m-info__picture">
  <img src="https://images6.alphacoders.com/633/thumbbig-633294.png"> 
    </div>
    <div class="m-info__content">
      <p>
        Haciendo cosas con Vue para aprender
        cómo se utiliza, luego de la vista practicaremos
        el famoso Vuex y rutas
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { 
  ref, defineComponent, onMounted, computed, 
} from 'vue';
import { useStore } from 'vuex';
import BlockCards from '@/components/BlockCards.vue';
import getData from '../api/requests';

export default defineComponent({
  name: 'Home',
  components: { BlockCards },
  setup() {
    const store = useStore();
    const result = ref(null);
    const search = async (term:string) => {
      const data = await getData(term);
      store.dispatch({
        type: 'stablishAsync',
        newTitle: term,
      });
      result.value = data;
    };
    let myTitle = computed(() => store.state.title);
    // PARA REVISAR
    // NO SÉ QUÉ HICE 
    onMounted(() => search('character')); 
    return {
      search,
      result,
      myTitle,
      
    };
  },
});
</script>

<style lang="scss" scoped>
  .m-main__welcome{
    @extend %flexRowStyle;
    justify-content:center;
    margin:3rem 0;
    padding:10px;
  }
    .m-main__photo{
      width:400px;
      img {
        width:100%;
        object-fit: contain
      }
      p{
        text-align: center;
        font-family:$poppins-font;
        font-weight:bolder;
        color:black;
      }
    }
    .m-main__text {
      width: 600px;
      p {
        text-align: center;
        padding:5px;
        font-family: $poppins-font;
      }
    }

  .m-container {
    @extend %flexRowStyle;
    justify-content: space-around;
    padding:40px;
    background-color:black;
    border:1px solid white;
  &__leftSide {
    padding:20px;
    border:1px solid black;
    @extend %flexColumnStyle;
    h1 {
      font-family:$poppins-font;
      width:400px;
      color:white;
      text-align: center;
      font-size:1.5rem;
    }
    .a-leftSide__title {
      color:white;
      font-family:$poppins-font;
      font-weight: bolder;
      font-size:2rem;
    }
    }
    &__leftSideContent {
      padding:30px;
      margin-top:0.6rem;
      ul {
        list-style: none;
        @extend %flexRowStyle;
        justify-content: center;
        li {
          margin:0.5rem 0.5rem;
          button {
            padding:10px;
            font-size:0.9rem;
            font-family:$poppins-font;
            color:white;
            background-color: transparent;
            font-weight: bolder;
            border:2px solid $rick-green;
            border-radius:10px;
            outline:none;
            cursor:pointer;
            &:hover {
              color:gray;
            }
          }
        }
      }
      .isActive {
        color:green;
        letter-spacing: 2px;
      }
    }
  }

  .m-info {
    background: url('../assets/wave.svg');
    margin:2rem 0;
    border:2px solid blue;
    @extend %flexRowStyle;
    justify-content:flex-start;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    height:60vh;
    &__picture {
      width:500px;
      img{
        width:100%;
      }
      margin:0 2rem;
    }
    &__content {
      width:600px;
      padding:10px;
      p {
        font-size:1.7rem;
        font-family:$poppins-font;
        font-weight: bolder;
      }
    }
  }
</style>
