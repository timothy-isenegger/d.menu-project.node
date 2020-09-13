<template>
  <div id="app">
    <div class="header">
      <h1>Check out these Recipes</h1>
      <button class="btn btn-outline-primary" @click="resetRecipeId()">Hide recipe</button>
    </div>
    <RecipesList v-on:selectRecipe="setRecipe"/>
    <RecipeDetail v-bind:selected-recipe="selectedRecipe"/>
  </div>
</template>

<script>
import RecipesList from "./components/RecipesList";
import RecipeDetail from "@/components/RecipeDetail";

export default {
  name: 'app',
  components: {
    RecipesList,
    RecipeDetail
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

    loadRecipe (id) {
      fetch(`http://localhost:3000/api/recipes/${id}`)
      .then(response => response.json())
      .then(data => this.selectedRecipe = data);
    }
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
