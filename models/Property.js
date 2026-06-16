import {Schema, model, models} from 'mongoose';
import { type } from 'os';

const PropertySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Owner is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    type: {
        type: String,
        required: [true, "Type is required"]
    },
    description: {
        type: String
    },
    location: {
    street: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipcode: {
        type: String
    }
},    
    bed:{
        type: Number,
        required: [true, "Number of beds is required"]
    },
    baths:{
        type: Number,
        required: [true, "Number of baths is required"]
    },
    square_free:{
        type: String,
        required: [true, "Square footage is required"]
    },
    amenities: [
        {
            type: String
        }
    ],
    rate : {
        nightly: Number,
        weekly: Number,
        monthly: Number
    },
    seller_info : {
        name: String,
        email: String,
        phone: String
    },
    images: [{
        type: String
    }],
    is_featured: {
        type: Boolean,
        default: false
    } 

}, {timestamps: true});

const Property = models.Property || model('Property', PropertySchema);

export default Property;
