import express from 'express';
import {
    countAllUsers,
    deleteUser,
    getAllUsers,
    getByIdUser,
    updateUser,
} from '../controllers/userController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//UPDATE
router.put('/:id', verifyUser, updateUser);
//DELETE
router.delete('/:id', verifyUser, deleteUser);
//GET BY ID
router.get('/:id', verifyUser, getByIdUser);
//GET ALL
router.get('/', verifyAdmin, getAllUsers);
router.get('/count/users', countAllUsers);

export default router;
