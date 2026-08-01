import { userModel } from '../models/User.model.js';
import { thoughtModel } from '../models/Thought.model.js';
import { createNotification } from '../services/notification.service.js';

import mongoose from 'mongoose';


export const createThought = async (req, res) => {
    try {
        const {content} = req.body;

        if(!content?.trim()){
            return res.status(400).json(
                {
                    success: false,
                    msg: "Thought Content is required."
                }
            )
        }

        //# Logged-in user
        const user = await userModel.findById(req.user.userId);

        if(!user){
            return res.status(400).json(
                {
                    success: false,
                    msg: "User not found"
                }
            )
        }

        //# Create thought
        const thought = await thoughtModel.create(
            {
                userId: user._id,
                content
            }
        );

        //# Create broadcast notification
        await createNotification(
            {
                senderId: user._id,
                title: "New Thought",
                message: `${user.firstName} ${user.lastName} posted a new thought.`,
                type: "NEW_THOUGHT",
                thoughtId: thought._id,
                isBroadcast: true,
            }
        );

        return res.status(201).json(
            {
                success: true,
                msg: "Thought createe Successfully",
                thought
            }
        )


    } catch (error) {
        console.log("Create Thought Error", error);

        return res.status(500).json(
            {
                success: false,
                msg: "Internal Server Error"
            }
        )
    }
}


//# ======================= Get all thoughts ==========================

export const getAllThought = async (req, res) => {
    try {
        const thoughts = await thoughtModel.find().populate("userId", "firstName lastName").sort({createdAt: -1});

        return res.status(200).json(
            {
                success: true,
                totalThoughts: thoughts.length,
                thoughts
            }
        )

    } catch (error) {
        console.log("Get Thoughts Error:", error);

        return res.status(500).json(
            {
                success: false,
                msg: "Internal Server Error",
            });
    }
}

//# =================== Get thought by id ====================

export const getThoughtById = async (req, res) => {
  try {
    const { id } = req.params;

    const thought = await thoughtModel
      .findById(id)
      .populate("userId", "firstName lastName");

    if (!thought) {
      return res.status(404).json({
        success: false,
        msg: "Thought not found.",
      });
    }

    return res.status(200).json({
      success: true,
      thought,
    });

  } catch (error) {
    console.log("Get Thought By ID Error:", error);

    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

//# ====================== Update thought ==================== 

export const updateThought = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid Thought ID.",
      });
    }

    // Validate content
    if (!content?.trim()) {
      return res.status(400).json({
        success: false,
        msg: "Thought content is required.",
      });
    }

    // Find thought
    const thought = await thoughtModel.findById(id);

    if (!thought) {
      return res.status(404).json({
        success: false,
        msg: "Thought not found.",
      });
    }

    // Owner check
    if (thought.userId.toString() !== req.user.userId) {
      return res.status(403).json({
        success: false,
        msg: "You are not authorized to update this thought.",
      });
    }

    // Update
    thought.content = content;
    await thought.save();

    return res.status(200).json({
      success: true,
      msg: "Thought updated successfully.",
      thought,
    });

  } catch (error) {
    console.log("Update Thought Error:", error);

    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};


//# ===================== Delete thought =======================

export const deleteThought = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid Thought ID.",
      });
    }

    // Find Thought
    const thought = await thoughtModel.findById(id);

    if (!thought) {
      return res.status(404).json({
        success: false,
        msg: "Thought not found.",
      });
    }

    // Owner Check
    if (thought.userId.toString() !== req.user.userId) {
      return res.status(403).json({
        success: false,
        msg: "You are not authorized to delete this thought.",
      });
    }

    // Delete Thought
    await thought.deleteOne();

    return res.status(200).json({
      success: true,
      msg: "Thought deleted successfully.",
    });

  } catch (error) {
    console.log("Delete Thought Error:", error);

    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};