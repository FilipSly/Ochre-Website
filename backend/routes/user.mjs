import express from "express"

import {
    registerUser
}  from '../controllers/registerController.js';

const router = express.Router()

//register user
router.post('/', registerUser)

export default router