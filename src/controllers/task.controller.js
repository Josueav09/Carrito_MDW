import task from "../models/task.model.js";

export const getTasks = async (req, res) =>{
    const tasks = await task.find({
        user: req.user.id
    }).populate("user")
    res.json(tasks);
}
export const createTask = async (req, res) =>{
    const {title, description, date} = req.body
    const newTask = new task ({
        title,
        description,
        date,
        user: req.user.id
    })
    const savedTask = await newTask.save()
    res.json(savedTask)
}
export const getTask = async (req, res) =>{
    const taskGet = await task.findById(req.params.id).populate("user")
    if (!taskGet) {
        return res.status(404).json({message: "Tarea no encontrada (GET)"})
    } else {
        res.json(taskGet)
    }
}
export const deleteTask = async (req, res) =>{
    const taskDelete = await task.findByIdAndDelete(req.params.id)
    if (!taskDelete) {
        return res.status(404).json({message: "Tarea no encontrada (DELETE)"})
    } else {
        return res.sendStatus(204)
    }
}
export const updateTask = async (req, res) =>{
    const taskUpdate = await task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    if (!taskUpdate) {
        return res.status(404).json({message: "Tarea no encontrada (UPDATE)"})
    } else {
        res.json(taskUpdate)
    }
}
