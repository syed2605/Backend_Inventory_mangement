import { Request, Response } from "express";
import { notificationServices } from "../services/notification.services";
import { successResponse } from "../utils/utils";

 export const getUserNotifications = async (req: Request, res: Response) : Promise<void> => {
    try{
    const notifications = await notificationServices.getNotificationByUserId(req?.params?.userId)

    res.status(200).json(successResponse(notifications, "Notification fetched Successfully"))
    }
    catch (error) {

    }
 }