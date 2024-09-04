// Middleware to check if a user is authenticated
export default function ({ store, redirect }) {
    if (!store.state.authenticated) {
      return redirect('/login'); // Redirect to login if not authenticated
    }
  }
  