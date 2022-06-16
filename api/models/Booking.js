import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        hotelName: {
            type: String,
            required: true,
        },
        hotelCity: {
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
        hotelPrice: {
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
