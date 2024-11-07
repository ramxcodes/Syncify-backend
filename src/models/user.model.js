import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true,
    },
    clerk:{
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});


export const User = mongoose.model('User', userScheme);