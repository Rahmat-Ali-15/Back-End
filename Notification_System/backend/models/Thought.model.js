import mongoose  from "mongoose";

const thoughtSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        content: {
            type: String,
            required: true,
            trim: true,
            maxlength: 500
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const thoughtModel = mongoose.model("Thought", thoughtSchema);