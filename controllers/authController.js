const User = require('../models/User');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    const errors = { email: '', password: '' };

    // duplicate error code 
    if(err.code === 11000) {
        errors.email = 'This email can\'t be used, try to change it please';
        return errors;
    }

    //validation errors
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

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
        const { email, password } = req.body;

        try {
            const user = await User.create({ email, password });
            res.status(201).json(user);           
        } catch (error) {
            const errors = handleErrors(error);
            res.status(400).json({ errors });
        }
    },
}