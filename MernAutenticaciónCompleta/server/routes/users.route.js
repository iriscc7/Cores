import { Router } from "express";
import usercntrll from "../controllers/users.controller.js";

const userrts = Router();

userrts.get('/',usercntrll.getAll)
userrts.post('/new',usercntrll.createone)
userrts.post('/login',usercntrll.login)

export default userrts

// m35:34