const User = require('../models/User');

module.exports = {
    signup_get : async (req, res) => {
        await res.render('signup');
    },

    login_get : async (req, res) => {
        await res.render('login');
    },

    signup_post : async (req, res) => {
        // console.log(req.body);
        const { email, password } = req.body;

        try {
            const user = await User.create({ email, password });
            res.status(201).json(user);
        } catch (error) {
            console.log(error);
            res.status(400).send('error, user not created');
        }

        // await res.send('new signup');
    },

    login_post : async (req, res) => {
        // console.log(req.body);
        const { email, password } = req.body;

        console.log(email, password);
        await res.send('user login');
    },
}