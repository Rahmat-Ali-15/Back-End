import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
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
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

likeSchema.index(
    {
        userId: 1,
        thoughtId: 1
    },
    {
        unique: true
    }
)

export const likeModel = mongoose.model("Like", likeSchema);