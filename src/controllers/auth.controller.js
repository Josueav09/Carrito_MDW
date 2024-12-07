import cliente from '../models/cliente.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken}  from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { tokenSecret } from "../config.js";


export const register = async (req, res) => {
    const {email, dni, password, username, age, phoneNumber, address, city }=req.body

    try {

        const clienteFound = await cliente.findOne({email});
        if (clienteFound) {
            return res.status(400).json(['El correo electronico cliente ya esta definido']);
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newCliente = new cliente ({
            email,
            password: passwordHash,
            username,
            dni,
            age,
            phoneNumber,
            address,
            city
        })
        
        const clienteSaved = await newCliente.save()
        const token = await createAccessToken({id: clienteSaved._id})
        res.cookie('token', token, {
            sameSite: 'none',
            secure: true,
            httpOnly: true
        })
        res.json({
            id: clienteSaved._id,
            username: clienteSaved.username,
            email: clienteSaved.email,
            dni: clienteSaved.dni,
            age: clienteSaved.age,
            phoneNumber: clienteSaved.phoneNumber,
            address: clienteSaved.address,
            city: clienteSaved.city,
            createdAt: clienteSaved.createdAt,
            updatedAt: clienteSaved.updatedAt,
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }

};
export const login = async (req, res) => {
    const {email, password}=req.body

    try {

        const clienteFound = await cliente.findOne({email})
        if (!clienteFound)
            return res.status(400).json({message: "Usuario Cliente no encontrado"})
        const isMatch = await bcrypt.compare(password, clienteFound.password);
        if(!isMatch)
            return res.status(400).json({message: "contraseña incorrecta"})

        const token = await createAccessToken({id: clienteFound._id})
        res.cookie('token', token)
        res.json({
            id: clienteFound._id,
            username: clienteFound.username,
            email: clienteFound.email,
            dni: clienteFound,
            age: clienteFound.age,
            phoneNumber: clienteFound.phoneNumber,
            address: clienteFound.address,
            city: clienteFound.city,
            createdAt: clienteFound.createdAt,
            updatedAt: clienteFound.updatedAt,
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};
export const logout = (req, res)=>{
    res.cookie('token', "",{
        expires: new Date(0),
    })
    return res.sendStatus(200);
}

export const profile = async (req, res)=>{
    const clienteFound = await clienteFound.findById(req.cliente.id)
    
    if(!clienteFound){ 
        return res.status(400).json({message: "Cliente no encontrado"});
    } else {
        return res.json({
            id: clienteFound._id,
            username: clienteFound.username,
            email: clienteFound.email,
            dni: clienteFound,
            age: clienteFound.age,
            phoneNumber: clienteFound.phoneNumber,
            address: clienteFound.address,
            city: clienteFound.city,
            createdAt: clienteFound.createdAt,
            updatedAt: clienteFound.updatedAt,
        })
    }   
}    

export const verifyToken = async (req, res) =>{
    const {token} = req.cookies
    if (!token) return res.status(401).json({message: "No hay token de autenticación del cliente"})
    jwt.verify(token, tokenSecret,async (err, clientee) => {
    if (err) return res.status(401).json({message: "Token de autenticación del cliente"})
        
    const clienteFound = await cliente.findById(clientee.id);
    console.log(cliente)
    if(!clienteFound) return res.status(401).json({message: "Cliente no encontrado"})
    
    return res.json({
        id: clienteFound._id,
        username: clienteFound.username,
        email: clienteFound.email,
        })
    })    
}