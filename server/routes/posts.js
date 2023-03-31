import { Router } from "express";
import { createPost, getAll, getById, getMyPosts, removePost, updatePost } from "../controllers/post.js";
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router();

// Create post
// http://localhost:3001/api/posts
router.post("/", checkAuth, createPost);

// Get all posts
// http://localhost:3000/api/posts
router.post("/", getAll);

// Get post by ID
// http://localhost:3000/api/posts/:id
router.get('/:id', getById)

// http://localhost:3000/api/posts/user/me
//Get my post
router.get('/user/me', checkAuth, getMyPosts)

// Remove post
// http://localhost:3000/api/posts/:id
router.delete('/:id',checkAuth, removePost)

// Update post
// http://localhost:3000/api/posts/:id
router.put('/:id',checkAuth, updatePost)

export default router;
