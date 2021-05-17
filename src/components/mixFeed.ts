interface Item {
  image?: string,
  name?: string,
  residents?: string[]
  status?: string,
  species?: string,
  dimension?: string,
  type?: string,
  episode?: string,
  air_date?: string,
}

interface ObjectItem {
  attrs:Item,
}

const helper = {
  methods: {
    completeCard(item:Item):ObjectItem {
      if (item.image) {
        return {
          attrs: {
            image: item.image,
            name: item.name,
            status: item.status,
            species: item.species,
          },
        };
      } if (item.residents) {
        return {
          attrs: {
            name: item.name,
            type: item.type,
            dimension: item.dimension,
          },
        };
      } 
      return {
        attrs: {
          name: item.name,
          episode: item.episode,
          air_date: item.air_date,
        },
      };
    },
  },
};
export default helper;
