import { Router } from "express";
import playlistcntrll from "../controllers/playlist.controller.js"

const playlistrts = Router();
playlistrts.get('/playlist',playlistcntrll.getplaylist);

export default playlistrts
