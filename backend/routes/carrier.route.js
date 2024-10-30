// backend/routes/carrier.route.js
import express from 'express';
import { addCandidate } from '../controllers/carrier.controller.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });


const router = express.Router();            
// POST route to submit carrier form along with resume
router.post('/carrier', upload.single('resume'), addCandidate);

export default router;

