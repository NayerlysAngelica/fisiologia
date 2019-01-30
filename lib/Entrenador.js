const Entrenador = require("./EntrenadorSchema");
exports.getEntrenadores = (req, res) => {
  Entrenador.find((err, entrenador) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(entrenador);
  });
};

exports.getEntrenador = (req, res) => {
  let id = req.params.id;

  Entrenador.find({ _id: id }, (err, entrenador) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(entrenador);
  });
};

exports.newEntrenador = (req, res) => {
  const newEntrenador = new Entrenador(req.body);
  newEntrenador.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newEntrenador);
  });
};

exports.updateEntrenador = (req, res) => {
  let nombre = req.body.nombre;
  Entrenador.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};
exports.deleteEntrenador = (req, res) => {
  Entrenador.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
