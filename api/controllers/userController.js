import User from '../models/User.js';

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateUser);
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User Deleted');
    } catch (err) {
        next(err);
    }
};

export const getByIdUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

export const countAllUsers = async (req, res, next) => {
    try {
        const usersCount = await User.countDocuments({ __v: 0 });
        res.status(200).json({ count: usersCount });
    } catch (err) {
        next(err);
    }
};
