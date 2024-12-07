import mongoose from 'mongoose';

export const connectDB = async ()=> {
    try {
        await mongoose.connect('mongodb+srv://JosueAyala:hPSUBuU7cV08uYF8@cluster0.6nv9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Database is connected');
    } catch (error) {
        console.log(error);
    }
}