<template lang="html">

  <section class="recipe-create">
    <h1>Create your new recipe</h1>
    <div class="recipe-create__grid">
      <form id="formRecipe" class="recipe-create__form" v-on:submit.prevent="submitRecipeForm">
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
          <input v-model="stepTitle" class="form-control" placeholder="What is the main goal of this step?" id="recipeStepTitle" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="recipeStepDescription">Step description</label>
          <input v-model="stepDescription" class="form-control" placeholder="Describe short, but clearly" id="recipeStepDescription" />
        </div>
        <span class="btn btn-outline-secondary" v-on:click="addRecipeStep">Add</span>
        <h4>Add ingredients</h4>
        <div class="form-group">
          <label class="form-control-label" for="ingredientAmount">Amount</label>
          <input v-model="ingredientAmount" class="form-control" placeholder="Please add ml, gr, etc..." id="ingredientAmount" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="ingredientName">Name</label>
          <input v-model="ingredientName" class="form-control" placeholder="What is the product called?" id="ingredientName" />
        </div>
        <span class="btn btn-outline-secondary" v-on:click="addIngredient">Add</span>

        <button type="submit" class="btn btn-primary">Create</button>
      </form>
      <div class="recipe-create__presentation">
        <h2>{{ title || 'Your title comes here...' }}</h2>
        <p> {{ description || 'Your fancy description' }}</p>
        <hr>
        <div class="recipe-create__instruction">
          <h4 v-if="hasRecipeSteps">Instructions</h4>
          <div v-for="step in recipeSteps" v-bind:key="step.title">
            <h5>{{ step.title }}</h5>
            <p>{{ step.description }}</p>
          </div>
        </div>
        <div class="recipe-create__ingredients">
          <h4 v-if="hasIngredients">Ingredients</h4>
          <ul>
            <li v-for="ingredient in recipeIngredients" v-bind:key="ingredient.name">{{ingredient.amount}} –
              {{ ingredient.name }}</li>
          </ul>
        </div>
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
        recipeSteps: [],
        ingredientAmount: '',
        ingredientName: '',
        recipeIngredients: [],
      }
    },
    methods: {
      addRecipeStep() {
        if (this.stepTitle !== '' && this.stepDescription !== '') {
          const newStep = {
            title: this.stepTitle,
            description: this.stepDescription
          }

          try {
            this.recipeSteps.push(newStep);
            this.stepTitle = '';
            this.stepDescription = '';
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
          }

        } else {
          window.alert('please fill out title and description');
        }
      },
      addIngredient() {
        if (this.ingredientAmount !== '' && this.ingredientName !== '') {
          try {
            this.recipeIngredients.push({
              amount: this.ingredientAmount,
              name: this.ingredientName
            });
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
          }
        } else {
          window.alert('Please fill out amount and name');
        }
      },
      submitRecipeForm() {
        // TODO - Save new recipe
      }
    },
    computed: {
      hasRecipeSteps() {
        return this.recipeSteps.length > 0;
      },
      hasIngredients() {
        return this.recipeIngredients.length > 0;
      }
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
