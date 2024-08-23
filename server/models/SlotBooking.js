import { Schema, model } from 'mongoose'

const slotBookingSchema = new Schema({

    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    serviceProvider:
    {
        type: Schema.Types.ObjectId,
        ref: 'ServiceProvider',
        required:true
    },
    bookingDate:
    {
        type: Date,
        default: Date.now(),
   
    },
    serviceDate:
    {
        type: Date,
        default: Date.now(),
        require : true
    },
    userAddress:
    {
        type: String,
        require : true
    },
    description:
    {
        type: String,
        
    },
},
    {
        timestamps: true
    })

    const SlotBook = model ('SlotBook' , slotBookingSchema)

    export default SlotBook;