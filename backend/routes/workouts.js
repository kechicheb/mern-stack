const express = require('express')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'})
})