module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/globals/_variables.scss";
        @import "@/globals/_classics.scss";
        `
      },
    },
  },
};
