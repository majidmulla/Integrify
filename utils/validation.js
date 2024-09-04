// Utility function for email validation
exports.isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  // Utility function for password validation (min 6 characters)
  exports.isValidPassword = (password) => {
    return password.length >= 6;
  };
  