const request = require('supertest');
const app = require('../server/server'); // Importing the server

// Test to verify that the /api/courses route returns courses
describe('GET /api/courses', () => {
  it('should return all courses', async () => {
    const response = await request(app).get('/api/courses');
    expect(response.status).toBe(200); // Expecting HTTP status 200
    expect(response.body.length).toBeGreaterThan(0); // Courses should be returned
  });
});
