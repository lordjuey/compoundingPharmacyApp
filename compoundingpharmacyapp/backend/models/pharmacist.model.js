const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    phName: {
        type:String,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const Pharmacist = mongoose.model ('pharmacist', userSchema);
module.exports =Pharmacist;