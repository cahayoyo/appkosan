import express from 'express';
import {
    countAllBookings,
    createBooking,
    deleteBooking,
    getAllBookings,
    getByIdUser,
} from '../controllers/bookingController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// CREATE
router.post('/', createBooking);

// DELETE
router.delete('/:id', deleteBooking);

// FIND
router.get('/:username', getByIdUser);

// GET
router.get('/', getAllBookings);
router.get('/count/bookings', countAllBookings);

export default router;
