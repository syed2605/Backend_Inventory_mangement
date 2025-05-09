import { getUserNotifications } from "../controller/notification.controller";
import authenticateToken from "../middleware/authMiddleware";
import { getUserNotificationValidator } from "../validators/notification.validator";

// import { getPatientNotifications } from '../controllers/notification.controller';
const express = require("express");
const router = express.Router();

// GET /api/notifications/patient/:patientId
router.get('/notification/:userId',authenticateToken,getUserNotificationValidator, getUserNotifications);

export default router;