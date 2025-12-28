const Pet = require('../models/pet')
const express = require('express')
const app = express()
const router = express.Router()

router.post('/', async (req,res) => {
    try {
        const newPet = await Pet.create(req.body)
        res.status(201).json({newPet})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'failed to create pet'})
    }
    res.json(req.body)
})

module.exports = router