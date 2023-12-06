import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    //author: {
    //type: String,
    //    required: true
    //},
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

export default model("Post", postSchema)