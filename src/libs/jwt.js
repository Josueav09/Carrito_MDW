import { tokenSecret } from "../config.js";
import jsonwebtoken from "jsonwebtoken"


export function createAccessToken(payload){
    return new Promise((resolve, reject)=>{
        jsonwebtoken.sign(
            payload,
            tokenSecret,
            {
                expiresIn: '1h',
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    })
}