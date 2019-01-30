const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeportistaSchema = new Schema({
nombre:String,
apellidos:String,
edad:Number,
cedula:Number,
celular:Number,
dirección:String,
idplanentrenamientos:[{type:Schema.Types.ObjectId,ref:"Planentrenamientos"}],
idseguimientos:[{type:Schema.Types.ObjectId,ref:"Seguimientos"}]

});

module.exports = mongoose.model("Deportista", DeportistaSchema);
