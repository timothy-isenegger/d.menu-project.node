<template lang="html">

  <section class="recipes">
    <ul class="list-recipes">
      <li v-for="recipe in recipes" v-bind:key="recipe.id" @click="setRecipe(recipe.id)" class="card">
        <div class="card-title">{{recipe.title}}</div>
      </li>
    </ul>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'RecipesList',
    props: [],
    mounted () {

    },
    data () {
      return {
        loading: false,
        recipes: null,
        error: null,
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      setRecipe (id) {
        this.$router.push({path: `/recipe/${id}`});
      },

      loadData: async function () {
        this.error = this.recipes = null;
        this.loading = true;

        const res = await fetch('http://localhost:3000/api/recipes');
        this.recipes = await res.json();
        this.loading = false;
      },
    },
    computed: {
    }
}


</script>

<style lang="scss">
  .recipes {
    padding: 0 15px;
    width: 100%;

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
      margin: 0 auto;
      max-width: 540px;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      max-width: 720px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
      max-width: 960px;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }

  .list-recipes {
    display: grid;
    grid-template-rows: minmax(100px, auto);
    grid-template-columns: 25% 25% 25% 25%;
    grid-column-gap: 30px;
    list-style: none;
    padding: 0;
    margin:  30px 0;

    li {
      margin-bottom: 12px;

      &:hover {
        cursor: pointer;
        color: darkgreen;
      }
    }

    .card {
      box-shadow: 0 3px 6px rgba(0,0,0,.3);
      padding: 1rem;
    }
  }
</style>
