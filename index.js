express=require("express");
mongoose = require("mongoose");

const app= express();
//nuevo
const bodyParser= require("body-parser");

app.use(bodyParser.json());
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("access-control-allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
  next();
});
mongoose
  .connect(
    "mongodb://localhost:27017/fisiologia",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);

  });
//deportista
  var deportista = require("./lib/Deportista");

app.get("/deportistas", (req, res) => {
  deportista.getDeportistas(req, res);
});

app.get("/deportistas/:id", (req, res) => {
  deportista.getDeportista(req, res);
});

app.post("/deportistas", (req, res) => {
  deportista.newDeportista(req, res);
});

app.put("/deportistas/:id", (req, res) => {
  deportista.updateDeportista(req, res);
});

app.delete("/deportistas/:id", (req, res) => {
  deportista.deleteDeportista(req, res);
});

//entrenador
var entrenador = require("./lib/Entrenador");

app.get("/entrenadores", (req, res) => {
entrenador.getEntrenadores(req, res);
});

app.get("/entrenadores/:id", (req, res) => {
entrenador.getEntrenador(req, res);
});

app.post("/entrenadores", (req, res) => {
entrenador.newEntrenador(req, res);
});

app.put("/entrenadores/:id", (req, res) => {
entrenador.updateEntrenador(req, res);
});

app.delete("/entrenadores/:id", (req, res) => {
entrenador.deleteEntrenador(req, res);
});
//planentrenamiento
var planentrenamiento = require("./lib/planentrenamiento");

app.get("/planentrenamientos", (req, res) => {
planentrenamiento.getPlanentrenamientos(req, res);
});

app.get("/planentrenamientos/:id", (req, res) => {
planentrenamiento.getPlanentrenamiento(req, res);
});

app.post("/planentrenamientos", (req, res) => {
planentrenamiento.newPlanentrenamiento(req, res);
});

app.put("/planentrenamientos/:id", (req, res) => {
planentrenamiento.updatePlanentrenamiento(req, res);
});

app.delete("/planentrenamientos/:id", (req, res) => {
planentrenamiento.deletePlanentrenamiento(req, res);
});
//seguimiento
var seguimiento = require("./lib/Seguimiento");

app.get("/seguimientos", (req, res) => {
seguimiento.getSeguimientos(req, res);
});

app.get("/seguimientos/:id", (req, res) => {
seguimiento.getSeguimiento(req, res);
});

app.post("/seguimientos", (req, res) => {
seguimiento.newSeguimiento(req, res);
});

app.put("/seguimientos/:id", (req, res) => {
seguimiento.updateSeguimiento(req, res);
});

app.delete("/seguimientos/:id", (req, res) => {
seguimiento.deleteSeguimiento(req, res);
});
// escuchamos
app.listen(30000);
console.log(`Server on %s ${app.settings.env}`);
