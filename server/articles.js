import express from "express";
const router = express.Router();
import {
  createPost,
  getPost,
  getPosts,
  queryByTags,
  queryByTime,
} from "./newsController.js";

//Create
router.post("/", createPost);
//Get all
router.get("/", getPosts);
//Get Single
router.get("/:id", getPost);
//Query by Tag
router.get("/tag/:tag", queryByTags);
//Query by Time
router.get("/time/:timestamp", queryByTime);

export default router;
