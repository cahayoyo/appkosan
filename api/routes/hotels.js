import express from 'express';
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getAllHotels,
    getByIdHotel,
    getHotelRooms,
    updateHotel,
} from '../controllers/hotelController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createHotel);
//UPDATE
router.put('/:id', verifyAdmin, updateHotel);
//DELETE
router.delete('/:id', verifyAdmin, deleteHotel);
//GET BY ID
router.get('/find/:id', getByIdHotel);
//GET ALL
router.get('/', getAllHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);

export default router;
