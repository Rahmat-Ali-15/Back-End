import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


import { userModel } from "../models/User.model.js";

dotenv.config();


//# ================== Register or SignUp ===================
export const register = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;

        //# Validation
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json(
                {
                    success: false,
                    msg: "All fields are required."
                }
            )
        }

        //# Check existing user 
        const existingtUser = await userModel.findOne({email});

        if(existingtUser){
            return res.status(409).json(
                {
                    success: false,
                    msg: "User already exist. Please login"
                }
            )
        }

        //# Hash Password
        const salt = await bcrypt.genSalt(+process.env.SALTROUND);
        const hashPassword = await bcrypt.hash(password, salt);

        //# Create user
        const user = await userModel.create(
            {
                firstName,
                lastName,
                email,
                password: hashPassword
            }
        );

        return res.status(201).json(
            {
                success: true,
                msg: "User Created Successfully",
                user
            }
        );

    } catch (error) {
        console.log("Register Error:", error);
        return res.status(500).json(
            {
                success: false,
                msg: "Internal Server Error"
            }
        )
    }
}


//# ======================== Login ======================
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        //# Validation
        if(!email || !password){
            return res.status(400).json(
                {
                    success: false,
                    msg: "All fields are reauired"
                }
            )
        }

        //# Existing user
        const existingUser = await userModel.findOne({ email });

        if(!existingUser){
            return res.status(401).json(
                {
                    success: false,
                    msg: "User Not Found."
                }
            )
        }

        //# Password verification
        const isMatch = await bcrypt.compare(password, existingUser.password);

        if(!isMatch){
            return res.status(401).json(
                {
                    success: false,
                    msg: "Incorrect password"
                }
            )
        };

        //# Generating JWT token
        const token = jwt.sign({userId: existingUser._id}, process.env.SECRET_KEY, {expiresIn: "1d"});

        res.status(200).json(
            {
                success: true,
                msg: "Login Successfull",
                token,
                user: {
                        _id: existingUser._id,
                        firstName: existingUser.firstName,
                        lastName: existingUser.lastName,
                        email: existingUser.email,
                      },
            }
        )

    } catch (error) {
        console.log("🚀 ~ error:", error);
        
        return res.status(500).json(
            {
                success: false,
                msg: "Internal Server Error"
            });
    }
}


//# ================= me ===================
export const getMe = async (req, res) => {
  try {
    const user = await userModel
      .findById(req.user.userId)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User not found.",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("Get Me Error:", error);

    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};