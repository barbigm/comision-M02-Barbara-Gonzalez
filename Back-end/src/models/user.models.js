import {Schema, model} from 'mongoose'


const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

export default model("User", userSchema)