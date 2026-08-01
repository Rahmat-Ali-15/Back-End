import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json(
                {
                    success: false,
                    msg: "Authentication Failed"
                }
            )
        }

        jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
            if(err){
                return res.status(401).json(
                    {
                        success: false,
                        msg: "Invalid or Expired token"
                    }
                )
            }

            req.user = decode;

            next();
        })
    } catch (error) {
        console.log("🚀 ~ Authentication Middleware Error:", error);
        return res.status(500).json(
            {
                success: false,
                msg: "Interval Server Error"
            }
        )
    }
}