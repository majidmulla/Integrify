<template>
  <!-- Courses Page - Lists all available courses -->
  <div class="container">
    <h1>Our Courses</h1>
    <p>Browse through our curated list of courses, designed to enhance your knowledge and skills in a variety of subjects.</p>

    <!-- Courses grid -->
    <div class="row">
      <!-- Loop through each course in the data and render CourseCard component -->
      <div class="col-md-4" v-for="course in courses" :key="course.id">
        <CourseCard :course="course" />
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from '~/components/CourseCard.vue'

export default {
  components: {
    CourseCard // Import the reusable CourseCard component
  },
  data() {
    return {
      courses: [
        { id: 1, title: 'Web Development Bootcamp', description: 'Master full-stack web development.', image: '/assets/images/course1.jpg' },
        { id: 2, title: 'Data Science Mastery', description: 'Learn the ins and outs of data analysis.', image: '/assets/images/course2.jpg' },
        { id: 3, title: 'Graphic Design for Beginners', description: 'Become a pro at design tools and techniques.', image: '/assets/images/course3.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
/* Courses page header styling */
h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

p {
  font-size: 1.1rem;
  margin-bottom: 30px;
}
</style>
