const express = require('express')
const knex = require('knex')
const server = express()
const Wizards = require('../wizards/wizardHelper')
server.use(express.json())

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'we working' })
})

server.get('/wizards', async (req, res) => {
    try {
        const wizards = await Wizards.getAll()
        res.status(200).json(wizards)
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})

server.post('/wizards', async (req, res) => {
    const { name } = req.body
    if ( !name ) {
         return res.send({ message: 'Please provide the wizards name' })
    } 
    try {
        const wizard = await Wizards.add(req.body)
        res.status(201).json(wizard)
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})

server.delete('/wizards/:id', async (req, res) => {
    id = req.params.id
    try {
        const deleted = await Wizards.remove(id)
        console.log(deleted)
        if (deleted > 0) {
            res.status(204).json(deleted)
        } else {
            res.status(404).json({message: "I told you to take the wizard's staff!"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = server