const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeguimientoSchema = new Schema({
  semanas:Number,
  masa_muscular:Number,
  sentadillas:Number,
  resistencia:Number,
  pecho:Number,
  cardio:Number,
  equilibrio:Number,
  fuerza:Number,
  iddeportistas:[{type:Schema.Types.ObjectId,ref:"Deportistas"}],
  identrenadores:[{type:Schema.Types.ObjectId,ref:"Entrenadores"}]
});

module.exports = mongoose.model("Seguimiento", SeguimientoSchema);
