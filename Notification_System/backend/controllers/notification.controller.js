import { notificationModel } from "../models/Notification.model.js";
import { notificationStatusModel } from "../models/NotificationStatus.model.js";

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Broadcast + Personal Notifications
    const notifications = await notificationModel
      .find({
        $or: [
          { isBroadcast: true },
          { receiverId: userId },
        ],
      })
      .populate("senderId", "firstName lastName")
      .populate("thoughtId", "content")
      .sort({ createdAt: -1 });

    const finalNotifications = [];

    for (const notification of notifications) {
      let status = await notificationStatusModel.findOne({
        notificationId: notification._id,
        userId,
      });

      // Agar status nahi mila to default values use karo
      const isRead = status ? status.isRead : false;
      const isDelete = status ? status.isDelete : false;

      // Deleted notification mat bhejo
      if (!isDelete) {
        finalNotifications.push({
          ...notification.toObject(),
          isRead,
        });
      }
    }

    return res.status(200).json({
      success: true,
      totalNotifications: finalNotifications.length,
      notifications: finalNotifications,
    });
  } catch (error) {
    console.log("Get Notification Error:", error);

    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};