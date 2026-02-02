const Proyecto = require("../models/modelsproyecto");


async function obtenerTodos() {
  return await Proyecto.find();
}


async function obtenerPorId(id) {
  return await Proyecto.findById(id);
}

async function crear(data) {
  const proyecto = new Proyecto(data);
  return await proyecto.save();
}


async function actualizar(id, data) {
  return await Proyecto.findByIdAndUpdate(id, data, { new: true });
}


async function eliminar(id) {
  return await Proyecto.findByIdAndDelete(id);
}

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar, eliminar };
