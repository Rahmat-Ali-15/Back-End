export const AuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if(token === "12345"){
        next()
    }
    else{
        res.status(401).json({
            success: false,
            msg: "Unauthorized Access"
        })
    }
}