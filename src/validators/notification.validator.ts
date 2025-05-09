import { param } from "express-validator";

export const getUserNotificationValidator = [
    param('userId').isMongoId().withMessage('valid User ID is required')
]