import {Schema, model} from "mongoose"

const serviceProviderSchema = Schema ({
    

    user :{
        type : Schema.Types.ObjectId,
        ref :"User",
        
    },

    serviceId: {
        type : Schema.Types.ObjectId,
        ref : "Service",
        // required : true 

    },
 

    ownername : {
        type : String,
        required :  true
    },

    shopname : {
        type : String,
        required : true
    },

    description : {
         type : String,


    },

    category: {
        type: String,
        
        enum: ['carpenter', 'plumber', 'electrician', 'vegetable-stall', 'barber', 'cobbler'],
        default:"carpenter"
    },

    
    mobile : {
        type : Number,
        required : true,
        unique:true
        
    },

    location :{
        type  : String,
        
    },

    time :{
        type: String,
        required : true
    },

    password : {
        type : String,
        required : true,
        
    },

    address: {
        type: String,
        required: true
    }

    
},

   {
    timestamps : true
   }



)


const ServiceProvider = model ("ServiceProvider", serviceProviderSchema)

export {ServiceProvider}