import express from "express";
import { app } from "../../client/src/firebase.js";
import { signup } from "../controllers/auth.controller.js";
import { signin } from "../controllers/auth.controller.js";
import { google} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup)
router.post("/signin", signin)
router.delete("/google", google);


export default router;

