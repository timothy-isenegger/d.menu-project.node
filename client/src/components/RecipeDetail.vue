<template lang="html">

  <section class="recipe-detail" :class="{active: recipeHasData}">
    <h2>{{ selectedRecipe.title }}</h2>
    <p class="lead">{{ selectedRecipe.description }}</p>
    <div class="grid">
      <div class="step-wrapper">
        <h3>Zubereitung</h3>
        <ol class="list-steps">
          <li v-for="(step, index) in selectedRecipe.steps" :key="step.id">
            <h4>{{index + 1}}. {{step.title ? step.title : "Danach"}}</h4>
            <p>{{step.instruction}}</p>
          </li>
        </ol>
      </div>
      <div class="ingredients-wrapper">
        <h3>Zutaten</h3>
        <ul class="list-ingredients">
          <li v-for="ingredient in selectedRecipe.ingredients" :key="ingredient.id">
            <span class="amount">{{ ingredient.amount }}</span>
            <span class="title">{{ingredient.title}}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'recipe-detail',
    props: [
        'selectedRecipe'
    ],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {

    },
    computed: {
      recipeHasData() {
        return this.selectedRecipe.title !== undefined;
      }
    }
}


</script>

<style scoped lang="scss">
  .recipe-detail {
    border-top: 2px solid rgba(0,0,0,.2);
    opacity: 0;
    padding: 15px;
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

    &.active {
      opacity: 1;
      transition: opacity 300ms ease-in-out;
    }
  }

  .ingredients-wrapper {
    border-left: 1px solid gray;
    padding: 0 0 0 15px;
  }

  .list-steps {
    list-style-type: none;
    margin: 0;
    padding: 0;

    h4 {
      margin-bottom: 0;
    }

    h4 + p {
      margin-top: 0;
    }
  }

  .list-ingredients {
    .amount {
      display: inline-block;
      min-width: 50px;
      margin-right: 15px;
    }
  }

  .grid {
    display: grid;
    grid-column-gap: 30px;
    grid-template-columns: 60% 40%;
  }
</style>
