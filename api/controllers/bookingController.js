import Booking from '../models/Booking.js';

export const createBooking = async (req, res, next) => {
    const newBooking = new Booking(req.body);

    try {
        const savedBooking = await newBooking.save();
        res.status(200).json(savedBooking);
    } catch (err) {
        next(err);
    }
};

export const deleteBooking = async (req, res, next) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json('Booking Deleted');
    } catch (err) {
        next(err);
    }
};

export const getAllBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (err) {
        next(err);
    }
};
