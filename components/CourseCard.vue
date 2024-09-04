<template>
  <!-- Single Course Card for displaying individual course information -->
  <div class="card course-card">
    <!-- Placeholder image for the course -->
    <img class="card-img-top" :src="course.image" alt="Course Image" />

    <!-- Course title and brief description -->
    <div class="card-body">
      <h5 class="card-title">{{ course.title }}</h5>
      <p class="card-text">{{ course.description }}</p>

      <!-- Link to detailed course page -->
      <router-link :to="'/course/' + course.id" class="btn btn-primary">Learn More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: Object // Course object passed from parent component
  }
}
</script>

<style scoped>
/* Course card styling */
.course-card {
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

/* Adding a hover effect for cards */
.course-card:hover {
  transform: scale(1.05);
}

/* Ensuring course images fit within the designated area */
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
