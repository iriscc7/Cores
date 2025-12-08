import { Router } from "express";
import cancioncntrll from "../controllers/cancion.controller.js";

const cancionrts= Router();

cancionrts.get('/',cancioncntrll.getAll)
cancionrts.post('/',cancioncntrll.createone)
cancionrts.get('/:id',cancioncntrll.getone)
cancionrts.delete('/:id',cancioncntrll.deleteone)
cancionrts.put('/:id',cancioncntrll.updateone)

export default cancionrts

