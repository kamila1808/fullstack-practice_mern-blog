import { Router } from "express";
import { createPost, getAll } from "../controllers/post.js";
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router();

// Create post
// http://localhost:3001/api/posts
router.post("/", checkAuth, createPost);

// Get all posts
// http://localhost:3000/api/posts
router.post("/", getAll);

export default router;
