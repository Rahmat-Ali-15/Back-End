import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        title: {
            type: String,
            required: true,
            trim: true
        },
        
        message: {
            type: String,
            required: true,
            trim: true
        },
        
        type: {
            type: String,
            enum: ["NEW_THOUGHT", "LIKE", "COMMENT"]
        },

        thoughtId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thought",
            default: null
        },

        isBroadcast: {
            type: Boolean,
            default: false
        }
        
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const notificationModel = mongoose.model("Notification", notificationSchema)