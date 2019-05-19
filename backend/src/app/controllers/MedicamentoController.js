const Medicamento = require("../models/Medicamento");

class MedicamentoController {
  async index(req, res) {
    const medicamentos = await Medicamento.find();
    return res.json(medicamentos);
  }
  async store(req, res) {
    const medicamento = await Medicamento.create(req.body);
    return res.json(medicamento);
  }
  async update(req, res) {
    const medicamento = await Medicamento.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.json(medicamento);
  }
  async show(req, res) {
    const medicamento = await Medicamento.findById(req.params.id);
    return res.json(medicamento);
  }
  async destroy(req, res) {
    await Medicamento.findByIdAndDelete(req.params.id);
    return res.json([]);
  }
}

module.exports = new MedicamentoController();
