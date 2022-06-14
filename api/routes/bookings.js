import express from 'express';
import {
    createBooking,
    deleteBooking,
    getAllBookings,
} from '../controllers/bookingController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// CREATE
router.post('/', createBooking);

// DELETE
router.delete('/:id', deleteBooking);

// GET
router.get('/', getAllBookings);

export default router;
