import jwt from 'jsonwebtoken';
import UserData from '../Models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        const user = await UserData.findById(decoded.userID).select("-password");

        if(!user){
            return res.status(404).json({error: "User not found"})
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in Protected Route Controller : ", error.message)
        res.status(500).json({ error: "Internal Server Error" })

    }
};

export default protectRoute