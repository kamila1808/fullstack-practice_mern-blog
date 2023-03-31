import {Router} from 'express'
const router = new Router()
import {checkAuth} from '../utils/checkAuth.js'
import { createComment } from '../controllers/comment.js';

//Create comment
//http://localhost:3000/api/comments/:id
router.post('/:id', checkAuth, createComment)

export default router;