const proyectoService = require("../services/servicesproyecto");

exports.getProyectos = async (req, res) =>{
  try {
    const proyectos = await proyectoService.obtenerTodos();
    res.json(proyectos);;
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los proyectos", error });
  }
}

exports.getProyecto = async (req, res) => {
  try {
    const proyecto = await proyectoService.obtenerPorId(req.params.id);
    if (!proyecto) return res.status(404).json({ mensaje: "Proyecto no encontrado" });
    res.json(proyecto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener proyecto", error });
  }
};

exports.createProyecto = async (req, res) => {
  try {
    const nuevo = await proyectoService.crear(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear proyecto", error });
  }
};

exports.updateProyecto = async (req, res) => {
  try {
    const actualizado = await proyectoService.actualizar(req.params.id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar proyecto", error });
  }
};

exports.deleteProyecto = async (req, res) => {
  try {
    await proyectoService.eliminar(req.params.id);
    res.json({ mensaje: "Proyecto eliminado" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar proyecto", error });
  }
};
