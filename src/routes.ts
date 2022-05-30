import { Router } from 'express';
import time_view from './time_service';

const router = Router();


router.get('/api/:date', time_view)
router.get('/api', time_view)


export default router;
