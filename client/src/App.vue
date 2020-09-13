<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      recipeId: null,
      selectedRecipe: {},
    }
  },
  methods: {
    setRecipe (id) {
      this.recipeId = id;
      this.loadRecipe(id);
    },

    resetRecipeId () {
      this.recipeId = null;
      this.selectedRecipe = {};
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  h1 {
    text-align: center;
  }

  .header {
    text-align: center;
  }

  .btn {
    display: inline-block;
    background-color: white;
    border: 1px solid gray;
    padding: .25rem .5rem;
  }
}
</style>
