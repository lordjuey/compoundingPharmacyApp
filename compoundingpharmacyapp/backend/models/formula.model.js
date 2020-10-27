const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const formulaSchema = new Schema({
    formulaname: {type:String,required: true},
    formulatype: {type:String, required:true},
    strength: {type:String, required:true},
    noteDate: {type:Date, required : true},
    formulaNote: {type:String, required :true},
},
{
    timestamps: true,
}
);

const Formula = mongoose.model('Formula', formulaSchema);

module.exports = Formula;

