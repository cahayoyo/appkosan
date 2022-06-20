import express from 'express';
import {
    countAllKosts,
    countByCity,
    countByType,
    countByUniversity,
    createKost,
    deleteKost,
    getAllKosts,
    getByIdKost,
    getHotelRooms,
    updateKost,
} from '../controllers/hotelController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
import { createError } from '../utils/error.js';

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createKost);
//UPDATE
router.put('/:id', verifyAdmin, updateKost);
//DELETE
router.delete('/:id', verifyAdmin, deleteKost);
//GET BY ID
router.get('/find/:id', getByIdKost);
//GET ALL
router.get('/', getAllKosts);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/countByUniversity', countByUniversity);
router.get('/room/:id', getHotelRooms);
router.get('/count/kosts', countAllKosts);

export default router;
