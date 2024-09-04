// Vuex store for managing the application's global state
export const state = () => ({
    courses: [],       // List of available courses
    authenticated: false, // Whether the user is logged in
    user: null         // User data (if authenticated)
  });
  
  export const mutations = {
    setCourses(state, courses) {
      state.courses = courses;
    },
    setAuthenticated(state, status) {
      state.authenticated = status;
    },
    setUser(state, user) {
      state.user = user;
    }
  };
  
  export const actions = {
    async fetchCourses({ commit }) {
      // Fetch courses from the API
      const courses = await this.$axios.$get('/api/courses');
      commit('setCourses', courses);
    },
    login({ commit }, user) {
      // Set user and authentication status upon login
      commit('setAuthenticated', true);
      commit('setUser', user);
    },
    logout({ commit }) {
      // Clear user and authentication status upon logout
      commit('setAuthenticated', false);
      commit('setUser', null);
    }
  };
  