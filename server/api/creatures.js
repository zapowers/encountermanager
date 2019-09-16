'use strict'
const router = require('express').Router()
const { Creature } = require('../db')


router.get("/", async (req, res, next) => {
    try{
        const creatures = await Creature.findAll()
        res.json(creatures)
    }
    catch (err) {
        res.status(500).send("No combatants found!")
    }
})

router.get('/:creatureid', async (req, res, next) => {
    try {
        res.json(await Project.findById(req.params.projectid, {include: [Robot]}))
    }
    catch (err) {
        res.status(500).send("This task does not exist")
    }
})

module.exports = router
