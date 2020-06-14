<template lang="html">

  <section class="recipes">
    <h1>recipes Component</h1>
    <ul>
      <li v-for="recipe in recipes" v-bind:key="recipe.id">
        {{recipe.title}}
      </li>
    </ul>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'recipes',
    props: [],
    mounted () {

    },
    data () {
      return {
        loading: false,
        recipes: null,
        error: null
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      loadData: async function () {
        this.error = this.recipes = null;
        this.loading = true;

        const res = await fetch('http://localhost:3000/api/recipes');
        const data = await res.json();
        this.recipes = data;
        this.loading = false;
      }
    },
    computed: {
    }
}


</script>

<style>
  .recipes {

  }
</style>
