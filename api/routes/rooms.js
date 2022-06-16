import express from 'express';
import {
    countAllRooms,
    createRoom,
    deleteRoom,
    getAllRooms,
    getByIdRoom,
    updateRoom,
    updateRoomAvailability,
} from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/:hotelid', verifyAdmin, createRoom);
//UPDATE
router.put('/:id', verifyAdmin, updateRoom);
router.put('/availability/:id', updateRoomAvailability);
//DELETE
router.delete('/:id', verifyAdmin, deleteRoom);
//GET BY ID
router.get('/:id', getByIdRoom);
//GET ALL
router.get('/', getAllRooms);
router.get('/count/rooms', countAllRooms);

export default router;
