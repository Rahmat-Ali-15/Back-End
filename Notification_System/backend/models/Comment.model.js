import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        thoughtId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thought",
            required: true
        },

        comment: {
            type: String,
            required: true,
            trim: true,
            maxlength: 250
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const commentModel = mongoose.model("Comment", commentSchema)