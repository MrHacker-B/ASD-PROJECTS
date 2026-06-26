const express = require('express');
const router = express.Router();
const Course = require('../models/Course');


//add course
router.post('/', async (req, res) => {
    const course = await Course.create(req.body);
    res.json({message: 'Course added successfully', course});
});

//get all courses
router.get('/', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

//get course by id
router.get('/:id', async (req, res) => {
    const courses = await Course.findById(req.params.id);
    res.json(courses);
});
//update
router.put('/:id', async (req, res) => {
    const courses = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(courses);
});

//delete
router.delete('/:id', async (req, res) => {
    const courses = await Course.findByIdAndDelete(req.params.id);
    res.json(courses);
});

module.exports = router;