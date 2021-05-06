const helper = {
  methods: {
    completeCard(item:any) {
      if (item.image) {
        return {
          attrs: {
            photo: item.image,
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
