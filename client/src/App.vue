<template>
  <div id="app">
    <nav class="navigation">
      <router-link to="/" style="margin-right: 15px;">Home</router-link>
      <router-link to="/create">Create new</router-link>
    </nav>
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
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0;

  .navigation {
    background-color: #2c3e50;
    margin-bottom: 30px;
    padding: 10px 40px;

    a {
      color: white;
      text-decoration: none;
    }
  }

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
