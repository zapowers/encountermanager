'use strict'
const router = require('express').Router()
const { Party } = require('../db')


router.get("/", async (req, res, next) => {
    try{
        const party = await Party.findAll()
        res.json(party)
    }
    catch (err) {
        console.log("we done failed")
        res.status(500).send("No combatants found!")
    }
})

router.post('/:partyid', async (req, res, next) => {
    try {
        res.json(await Party.findOrCreate(req.params.selectedCreature))
    }
    catch (err) {
        res.status(500).send("This task does not exist")
    }
})


module.exports = router
