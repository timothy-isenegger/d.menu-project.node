<template lang="html">

  <section class="recipe-create">
    <h1>Create your new recipe</h1>
    <div class="recipe-create__grid">
      <form id="formRecipe" class="recipe-create__form">
        <div class="form-group">
          <label class="form-control-label" for="recipeTitle">Title</label>
          <input v-model="title" class="form-control" placeholder="Give your recipe a catchy title" id="recipeTitle" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="recipeDescription">Description</label>
          <textarea v-model="description" class="form-control" placeholder="What can we expect?" id="recipeDescription" />
        </div>
        <h4>Add instruction step</h4>
        <div class="form-group">
          <label class="form-control-label" for="recipeStepTitle">Step title</label>
          <input v-model="stepTitle" class="form-control" placeholder="Give your recipe a catchy title" id="recipeStepTitle" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="recipeStepDescription">Step description</label>
          <input v-model="stepDescription" class="form-control" placeholder="Give your recipe a catchy title" id="recipeStepDescription" />
        </div>
        <button class="btn btn-outline-secondary" @click="addRecipeStep()">Add</button>
      </form>
      <div class="recipe-create__presentation">
        <h2>{{ title || 'Your title comes here...' }}</h2>
        <p> {{ description || 'Your fancy description' }}</p>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'recipe-create',
    props: [],
    mounted () {

    },
    data () {
      return {
        title: '',
        description: '',
        stepTitle: '',
        stepDescription: '',
      }
    },
    methods: {
      addRecipeStep() {
        // TODO - preventDefault -> click on button should not submit form!
        // TODO - create new array in data called recipeSteps
        // TODO - get values from step title & description --> add to recipeSteps
        // TODO - create list and fill with values from recipeSteps

      }
    },
    computed: {

    }
}


</script>

<style lang="scss">
  .recipe-create {
    max-width: 1110px;
    margin: 0 auto;

    &__grid {
      display: grid;
      grid-template-columns: 40% 60%;
      column-gap: 30px;
    }

    &__form {
      padding-right: 15px;
    }

    &__presentation {
      border-left: 2px solid rgba(#2c3e50, .7);
      padding-left: 15px;
    }
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-control, .form-control-label {
    display: block;
    width: 100%;
  }

  .form-control {
    border: 1px solid #141414;
    border-radius: 4px;
    padding: .25rem .75rem;
  }

  .form-control-label {
    margin-bottom: .25rem;
  }
</style>
