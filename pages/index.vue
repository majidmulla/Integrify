<template>
  <!-- Home Page - Introduces the platform -->
  <div class="container text-center">
    <h1>Welcome to EdTech</h1>
    <p>Your go-to platform for learning and mastering new skills!</p>
    <!-- Call-to-action button to explore courses -->
    <router-link to="/courses" class="btn btn-primary">Explore Courses</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Styling for the homepage header */
h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

/* Description paragraph styling */
p {
  font-size: 1.25rem;
  margin-bottom: 30px;
}
</style>
