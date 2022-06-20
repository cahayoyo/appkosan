import Room from '../models/Room.js';
import Kost from '../models/Kost.js';
import { createError } from '../utils/error.js';

export const createRoom = async (req, res, next) => {
    const kostId = req.params.kostid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Kost.findByIdAndUpdate(kostId, {
                $push: { rooms: savedRoom._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
};

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateRoom);
    } catch (err) {
        next(err);
    }
};

export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne(
            { 'roomNumbers._id': req.params.id },
            {
                $push: {
                    'roomNumbers.$.unavailableDates': req.body.dates,
                },
            }
        );
        res.status(200).json('Room status has been updated');
    } catch (err) {
        next(err);
    }
};

export const deleteRoom = async (req, res, next) => {
    const kostId = req.params.kostid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Kost.findByIdAndUpdate(kostId, {
                $pull: { rooms: req.params.id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json('Room Deleted');
    } catch (err) {
        next(err);
    }
};

export const getByIdRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
};

export const getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};

export const countAllRooms = async (req, res, next) => {
    try {
        const roomsCount = await Room.countDocuments({ __v: 0 });
        res.status(200).json({ count: roomsCount });
    } catch (err) {
        next(err);
    }
};
