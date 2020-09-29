const express = require('express');
const router = express.Router();

const User = require('../models/user');

// create user
router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);

        await user.save();

        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// read user
router.get('/users', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });

        if (!user) {
            return res.status(404).send('Not found user');
        }

        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
