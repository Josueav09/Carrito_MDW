import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }),
    dni: z.string({
        required_error: 'DNI is required',
    }).max(8, {
        message: 'EL DNI debe tener 8 caracteres',
    }).min(8, {
        message: 'EL DNI debe tener 8 caracteres',
    }),
    email: z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Email invalido'
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        message: 'La contraseña debe tener 6 caracteres',
    }),
    age: z.string({
        required_error: 'La edad es requerida',
    }),
    phoneNumber: z.string({
        required_error: 'Número telefónico es requerido',
    }).regex(/^\d{9}$/, {
        message: 'El número de teléfono debe tener exactamente 9 dígitos',
    }),    
    address: z.string({
        required_error: 'La direccion es requerida',
    }),
    city: z.string({
        required_error: 'La ciudad es requerida',
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Email invalido'
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        message: 'La contraseña debe tener 6 caracteres',
    }),
})