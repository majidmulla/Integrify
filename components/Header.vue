<template>
  <!-- Header and Navbar - Provides navigation across the website -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Branding and logo -->
        <router-link to="/" class="navbar-brand">EdTech</router-link>
        
        <!-- Toggle button for mobile view -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links (Home, About, Courses, Contact) -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/courses" class="nav-link">Courses</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
/* Navbar brand (EdTech logo) styling */
.navbar-brand {
  font-weight: 700;
  color: #007bff;
  font-size: 1.5rem;
}

/* Nav link styling */
.nav-link {
  font-size: 1.1rem;
  color: #333;
  padding-right: 20px;
}

.nav-link:hover {
  color: #007bff;
  text-decoration: underline;
}
</style>
