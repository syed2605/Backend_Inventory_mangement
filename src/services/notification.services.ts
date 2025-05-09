import mongoose from "mongoose";
import { INotification } from "../interfaces/model.interfaces"
import notificationModel from "../models/notification.model";
import { INotifi } from "../interfaces/common.interfaces";


interface INotificationService {
    getNotificationByUserId : (user_id : string) => Promise<INotification[] | null>,
    addNotifications : (data : INotifi) => Promise<INotification | null>
}

export const notificationServices : INotificationService = {
    getNotificationByUserId: async (user_id : string) : Promise<INotification[] | null> => {
        const notifi : INotification[] = await notificationModel.find({user_id})
        return notifi;
    },
    addNotifications : async (data : INotifi) : Promise<INotification | null> => {
        const notifi = new notificationModel(data)
        return await notifi.save();
    }
}