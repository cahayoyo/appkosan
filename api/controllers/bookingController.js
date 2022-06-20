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
        const bookings = await Booking.find().limit(req.query.limit);
        res.status(200).json(bookings);
    } catch (err) {
        next(err);
    }
};

export const countAllBookings = async (req, res, next) => {
    try {
        const bookingsCount = await Booking.countDocuments({ __v: 0 });
        res.status(200).json({ count: bookingsCount });
    } catch (err) {
        next(err);
    }
};

export const getByIdUser = async (req, res, next) => {
    try {
        const booking = await Booking.find({ username: req.params.username });
        res.status(200).json(booking);
    } catch (err) {
        next(err);
    }
};
