import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import moment from "moment";

// import { Container } from './styles';

export default function MedicamentosList() {
  const [medicamentos, setMedicamento] = useState([]);

  useEffect(() => {
    async function getMedicamentos() {
      const response = await api.get("/medicamentos");
      setMedicamento(response.data);
    }
    getMedicamentos();
  }, []);
  return (
    <>
      <Link to={`/Medicamentos/create`}>Novo Medicamento</Link>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Validade</th>
            <th>Indicação médica</th>
            <th>Formas de Uso</th>
            <th>Paciente</th>
          </tr>
        </thead>
        <tbody>
          {medicamentos.map(medicamento => (
            <tr key={medicamento._id}>
              <td>{medicamento.nome}</td>
              <td>{moment(medicamento.validade).format("DD/MM/YYYY")}</td>
              <td>{medicamento.tratamento}</td>
              <td>{medicamento.formasdeUso}</td>
              <td>{medicamento.individuo}</td>
              <td>
                <Link to={`/Medicamento/edit/${medicamento._id}`}>Editar</Link>
              </td>
              <td>
                <Link to={`/medicamento/${medicamento._id}`}>Deletar </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
