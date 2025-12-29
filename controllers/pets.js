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
})

router.get('/', async (req,res)=>{
    try {
        const allPets = await Pet.find()
        res.status(200).json({allPets})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'failed to get pet data'})
    }
})

router.get('/:petId', async (req,res)=>{
    try {
        const {petId} = req.params // destructure id from req.params
        const onePet = await Pet.findById(petId)
        if(!onePet){
            res.status(404).json({error:'Record Not Found'})
        }else{
            res.status(200).json({onePet})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal Server Error'})
    }
})

router.delete('/:petId', async (req,res)=>{
    try {
        const {petId} = req.params // destructure id from req.params
        const onePet = await Pet.findByIdAndDelete(petId)
        if(!onePet){
            res.status(404).json({error:'Record Not Found'})
        }else{
            res.status(200).json({onePet})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal Server Error'})
    }
})

router.put('/:petId', async (req,res)=>{
    try {
        const {petId} = req.params // destructure id from req.params
        const onePet = await Pet.findByIdAndUpdate(petId, req.body)
        if(!onePet){
            res.status(404).json({error:'Record Not Found'})
        }else{
            res.status(200).json({onePet})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal Server Error'})
    }
})
module.exports = router