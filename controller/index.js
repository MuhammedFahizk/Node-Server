const { User } = require('../Model/user'); // Ensure you have the correct path

const LoginPage = (req, res) => {
    res.send('Login Page');
};

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Log the incoming request body for debugging
        // console.log();

        // Create a new user instance
        const user = new User({ name, email, password });

        // Save the user to the database
        await user.save();

        // Send a success response to the client
        res.status(201).send({ message: 'Signup successful', user });
    } catch (err) {
        // Log the error for debugging
        console.error(err);

        // Send an error response to the client
        res.status(500).send({ error: 'Failed to sign up the user', details: err.message });
    }
};

const  login = async (req, res) => {
    const {email, password} = req.body
     const user =  await User.findOne({email, password})
     console.log(req)
    if(user){
        res.status(200).json({message: 'login Success full'})
     } else {
        res.status(401).send({message: 'User Not Found'})

        }
}
module.exports = {
    LoginPage,
    signUp,
    login
};
