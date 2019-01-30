const Deportista = require("./DeportistaSchema");
exports.getDeportistas = (req, res) => {
  Deportista.find((err, deportista) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(deportista);
  });
};

exports.getDeportista = (req, res) => {
  let id = req.params.id;

  Deportista.find({ _id: id }, (err, deportista) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(deportista);
  });
};

exports.newDeportista = (req, res) => {
  const newDeportista = new Deportista(req.body);
  newDeportista.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newDeportista);
  });
};

exports.updateDeportista = (req, res) => {
  let deportista = req.body;
  Deportista.findOneAndUpdate(
    { _id: req.params.id },
    deportista,
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};
exports.deleteDeportista = (req, res) => {
  Deportista.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
