import { Router } from "express";
import playlistcntrll from "../controllers/playlist.controller.js";

const playlistrts= Router();

playlistrts.get("/", playlistcntrll.getAll);
playlistrts.get('/:id',playlistcntrll.getone)
playlistrts.post("/", playlistcntrll.createone);
playlistrts.delete('/:id',playlistcntrll.deleteone)


export default playlistrts