const Planentrenamiento = require("./PlanentrenamientoSchema");
exports.getPlanentrenamientos = (req, res) => {
  Planentrenamiento.find((err, planentrenamiento) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(planentrenamiento);
  });
};

exports.getPlanentrenamiento = (req, res) => {
  let id = req.params.id;

  Planentrenamiento.find({ _id: id }, (err, planentrenamiento) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(planentrenamiento);
  });
};

exports.newPlanentrenamiento = (req, res) => {
  const newPlanentrenamiento = new Planentrenamiento(req.body);
  newPlanentrenamiento.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newPlanentrenamiento);
  });
};

exports.updatePlanentrenamiento = (req, res) => {
  let nombre = req.body.nombre;
  Planentrenamiento.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};
exports.deletePlanentrenamiento = (req, res) => {
  Planentrenamiento.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
