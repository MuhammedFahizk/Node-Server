const { User } = require('../Model/user'); // Ensure you have the correct path
const jwt = require('jsonwebtoken')


const home = (req, res) => {
    res.send('Welcome to Home Page');

}
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
        const token = jwt.sign({email: user.email}, 'jwt-expire-token', {expiresIn: '1d'})
        res.cookie('token', token)
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
    if(user){
        const token = jwt.sign({email: user.email}, 'jwt-expire-token', {expiresIn: '1d'})
        res.cookie('token', token)
        res.status(200).json({message: 'login Success full'})
    console.log('as2');

     } else {
        res.status(401).send({message: 'User Not Found'})
        console.log('as3');

        }
}
module.exports = {
    LoginPage,
    signUp,
    login,
    home,
};
