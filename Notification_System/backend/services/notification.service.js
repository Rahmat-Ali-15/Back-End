import { notificationModel } from "../models/Notification.model.js";

export const createNotification = async ({
  senderId,
  receiverId = null,
  title,
  message,
  type,
  thoughtId = null,
  isBroadcast = false,
}) => {
  const notification = await notificationModel.create({
    senderId,
    receiverId,
    title,
    message,
    type,
    thoughtId,
    isBroadcast,
  });

  return notification;
};
