<template>
    <div class="container">
      <h1>{{ course.title }}</h1>
      <img :src="course.image" class="img-fluid" alt="Course Image" />
      <p>{{ course.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      // Placeholder course data (in real project, you'd fetch from an API)
      const courses = [
        { id: 1, title: "Course 1", description: "Detailed view of Course 1", image: "/placeholder.png" },
        { id: 2, title: "Course 2", description: "Detailed view of Course 2", image: "/placeholder.png" },
        { id: 3, title: "Course 3", description: "Detailed view of Course 3", image: "/placeholder.png" }
      ]
      const course = courses.find(course => course.id == params.id)
      return { course }
    }
  }
  </script>
  
  <style scoped>
  .img-fluid {
    margin: 20px 0;
  }
  </style>
  