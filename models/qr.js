const { Schema, default: mongoose } = require("mongoose");

const dataSchema=new Schema({
    uid:{
        type:JSON,
    },
})
export const data=
 mongoose.models.data || mongoose.model("data",dataSchema);
