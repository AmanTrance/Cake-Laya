import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
    username: string,
    email: string,
    password: string
}

const UserSchema: Schema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {versionKey: false})

const User = mongoose.model('User', UserSchema);

export default User;
