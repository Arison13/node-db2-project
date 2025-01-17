// DO YOUR MAGIC
const express = require('express');
const Car = require ('./cars-model')
const router = express.Router()
const { checkCarId } = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try{
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err){
        next(err)
    }
})

router.get('/:id', checkCarId,  (req, res, next) => {
    res.json(req.car)
})

router.post('/', (req, res, next) => {
    res.json('posting a new car')
})

module.exports = router