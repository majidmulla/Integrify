<template>
  <!-- Main layout for the website, includes header and footer -->
  <div>
    <Header />
    <!-- Main content section rendered by Nuxt -->
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header, // Header component
    Footer  // Footer component
  }
}
</script>

<style scoped>
/* Ensuring the main content occupies the majority of screen space */
main {
  min-height: 80vh;
  padding: 20px;
}
</style>
