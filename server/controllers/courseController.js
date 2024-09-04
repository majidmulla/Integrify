// In-memory course data (can be replaced with database logic)
const courses = [
    { id: 1, title: 'Web Development Bootcamp', description: 'Master full-stack web development.' },
    { id: 2, title: 'Data Science Mastery', description: 'Learn the ins and outs of data analysis.' },
    { id: 3, title: 'Graphic Design for Beginners', description: 'Become a pro at design tools and techniques.' }
  ]
  
  // Controller function to retrieve all courses
  exports.getAllCourses = (req, res) => {
    res.json(courses) // Sending all courses as JSON response
  }
  
  // Controller function to create a new course
  exports.createCourse = (req, res) => {
    const newCourse = req.body // Retrieving course data from request body
    courses.push(newCourse) // Adding new course to in-memory array
    res.status(201).json(newCourse) // Sending created course as response
  }
  