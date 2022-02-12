const asyncHandler = require('express-async-handler')

// @desc    Get goal
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    console.log('get goals')
    res.status(200).json({ message: 'Get goals' })
})

// @desc    Set goal
// @route   PUT /api/goals
// @access  Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        //.json({ message: "Please add a text field" })
        throw new Error("Please add a text field")
    }
    res.status(200).json({ message: 'Set goals' })
})

// @desc    Update goal
// @route   POST /api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
    console.log('get goals')
    res.status(200).json({ message: `Update goals` })
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = (async (req, res) => {
    res.status(200).json({ message: `Delete goals ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}