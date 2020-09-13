<template>
  <div class="home">
    <div class="header">
      <h1>Check out these Recipes</h1>
      <RecipesList />
    </div>
  </div>
</template>

<script>
import RecipesList from "@/components/RecipesList";
export default {
  name: 'Home',
  components: {RecipesList},
  props: {}
}
</script>

<style scoped lang="scss">

</style>
