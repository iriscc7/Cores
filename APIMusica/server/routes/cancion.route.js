import { Router } from "express";
import cancontroller from "../controllers/cancion.controller.js";

const cancionrts = Router();
cancionrts.get('/cancion',cancontroller.getcancion);

export default cancionrts
