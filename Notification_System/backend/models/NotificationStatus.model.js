import mongoose, { mongo } from "mongoose";

const notificationStatusSchema = new mongoose.Schema(
    {
        notificationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Notification",
            required: true
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        isRead: {
            type: Boolean,
            default: false
        },

        isDelete: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const notificationStatusModel = mongoose.model("NotificationStatus", notificationStatusSchema)