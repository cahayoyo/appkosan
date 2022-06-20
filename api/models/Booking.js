import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        kostName: {
            type: String,
            required: true,
        },
        kostCity: {
            type: String,
            required: true,
        },
        roomTitle: {
            type: String,
            required: true,
        },
        roomNumber: {
            type: [String],
            required: true,
        },
        kostPrice: {
            type: Number,
            required: true,
        },
        dateBooking: {
            type: [Date],
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Booking', BookingSchema);
