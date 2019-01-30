const Seguimiento = require("./SeguimientoSchema");
exports.getSeguimientos = (req, res) => {
  Seguimiento.find((err, seguimiento) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(seguimiento);
  });
};

exports.getSeguimiento = (req, res) => {
  let id = req.params.id;

  Seguimiento.find({ _id: id }, (err, seguimiento) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(seguimiento);
  });
};

exports.newSeguimiento = (req, res) => {
  const newSeguimiento = new Seguimiento(req.body);
  newSeguimiento.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newSeguimiento);
  });
};

exports.updateSeguimiento = (req, res) => {
  let nombre = req.body.nombre;
  Seguimiento.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};
exports.deleteSeguimiento = (req, res) => {
  Seguimiento.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
