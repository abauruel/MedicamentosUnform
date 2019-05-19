const express = require("express");
const routes = express.Router();

const MedicamentoController = require("./app/controllers/MedicamentoController");

routes.post("/medicamento", MedicamentoController.store);
routes.get("/medicamentos", MedicamentoController.index);
routes.get("/medicamento/:id", MedicamentoController.show);
routes.put("/medicamento/:id", MedicamentoController.update);
routes.delete("/medicamento/:id", MedicamentoController.destroy);

module.exports = routes;
