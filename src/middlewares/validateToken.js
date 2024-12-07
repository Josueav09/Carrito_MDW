import jsonwebtoken from "jsonwebtoken";
import { tokenSecret } from "../config.js";

export const authRequired = (req, res, next) =>{

    const {token} = req.cookies
    if(!token) 
        res.status(401).json({message: "No token, authorization denied"})
        jsonwebtoken.verify(token, tokenSecret, (err, cliente)=>{
            if(err)
                return res.status(403).json({message: "Invalid Token"})
            req.user = cliente;
            next();
        })
};