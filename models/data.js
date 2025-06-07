const { Schema, default: mongoose } = require("mongoose");

const dataSchema=new Schema({
    id:{
        type:String,
    },
    userData:{
        type:JSON,
    },
    espData:{
        type:JSON,
    }
})
export const data=
 mongoose.models.data || mongoose.model("data",dataSchema);
