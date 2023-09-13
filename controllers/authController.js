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

        console.log(email, password);
        await res.send('new signup');
    },

    login_post : async (req, res) => {
        // console.log(req.body);
        const { email, password } = req.body;

        console.log(email, password);
        await res.send('user login');
    },
}