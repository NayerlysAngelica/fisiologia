const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrenadorSchema = new Schema({
  nombre:String,
  apellido:String,
  cedula:Number,
  celular:Number,
  dirección:String,
  iddeportistas:[{type:Schema.Types.ObjectId,ref:"Deportistas"}],
  idseguimientos:[{type:Schema.Types.ObjectId,ref:"Seguimientos"}]
});

module.exports = mongoose.model("Entrenador", EntrenadorSchema);
