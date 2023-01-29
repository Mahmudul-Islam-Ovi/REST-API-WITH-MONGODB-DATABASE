const { v4: uuidv4 } = require('uuid');
const User = require('../models/user.model');


// get all users 
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// get one user by id
const getOneUsers = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ id });
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// create users 
const createUsers = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
            address: req.body.address,
        })
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json(error.message);
    }
};

// update users
const updateUsers = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ id });
        user.name = req.body.name;
        user.age = Number(req.body.age);
        user.address = req.body.address;
        await user.save();
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json(error.message);
    }
};
// delete users
const deleteUsers = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ id });
        res.status(200).json({ message: "Users is deleted " })
    } catch (error) {
        res.status(500).json(error.message);
    }
};



module.exports = {
    getAllUsers,
    createUsers,
    deleteUsers,
    getOneUsers,
    updateUsers
};