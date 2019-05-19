const mongoose = require("mongoose");

const MedicamentoSchema = new mongoose.Schema({
  nome: { type: String, require, lowercase: true },
  validade: { type: Date, require },
  tratamento: { type: String },
  individuo: { type: String },
  formasdeUso: { type: String },
  createAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Medicamento", MedicamentoSchema);
