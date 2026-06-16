import {Schema, model, models} from 'mongoose';
import { type } from 'os';

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email must be unique"],
        required: [true, "Email is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    bookmark: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Property',
        default: null
    }]
}, {timestamps: true});

const User = models.User || model('User', userSchema);

export default User;
