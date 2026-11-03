import express from "express";
import { setAvailability, cancelAppointments, updateAppointments } from "../controllers/proff.js";
import { authMiddleware } from "../middleware/auth.js"; 
import { profMiddleware } from "../middleware/auth.js"; 
const router = express.Router();


router.post("/availability", authMiddleware,profMiddleware, setAvailability);

router.patch("/updateAppointment/:studentId", authMiddleware, profMiddleware, updateAppointments);

// Route to cancel appointments between professor and student - Only accessible to professors
router.patch("/cancel-appointments/:studentId", authMiddleware, profMiddleware, cancelAppointments);

export default router;
