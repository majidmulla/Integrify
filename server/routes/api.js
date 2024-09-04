// API routing for course-related requests
const express = require('express')
const router = express.Router()

// Importing the course controller
const courseController = require('../controllers/courseController')

// Route to fetch all courses
router.get('/courses', courseController.getAllCourses)

// Route to create a new course
router.post('/courses', courseController.createCourse)

module.exports = router
