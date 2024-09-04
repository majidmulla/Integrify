<template>
    <!-- Contact Page - Simple form for users to reach out -->
    <div class="container">
      <h1>Contact Us</h1>
      <p>If you have any questions, suggestions, or want to get in touch, feel free to send us a message below:</p>
  
      <!-- Simple contact form -->
      <form @submit.prevent="submitForm">
        <!-- Name input -->
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" v-model="form.name" id="name" class="form-control" required>
        </div>
  
        <!-- Email input -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="form.email" id="email" class="form-control" required>
        </div>
  
        <!-- Message textarea -->
        <div class="form-group">
          <label for="message">Message</label>
          <textarea v-model="form.message" id="message" class="form-control" rows="4" required></textarea>
        </div>
  
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      // Handles form submission
      submitForm() {
        // Example form handling logic (can be extended to submit to an API)
        alert('Your message has been sent! Thank you for reaching out.');
        
        // Reset the form after submission
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  }
  </script>
  
  <style scoped>
  /* Contact page styling */
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  textarea {
    resize: none;
  }
  </style>
  