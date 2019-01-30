const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanentrenamientoSchema = new Schema({
plan:String,
iddeportistas:[{type:Schema.Types.ObjectId,ref:"Deportistas"}]
});

module.exports = mongoose.model("Planentrenamiento", PlanentrenamientoSchema);
