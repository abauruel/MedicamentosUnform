import React, { useState, useEffect } from "react";
import api from "../../services/api";
import moment from "moment";
// import { Container } from './styles';

export default function MedicamentosDelete({ history, match }) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadData() {
      const { id } = match.params;
      const response = await api.get(`/medicamento/${id}`);
      setData(response.data);
    }
    loadData();
    if (!match.params.id) return history.push("/medicamentos");
  }, [history, match.params, match.params.id]);

  return (
    <div>
      <p>{data.nome}</p>
      <p>{moment(data.validade).format("DD/MM/YYYY")}</p>
      <p>{data.formasdeUso}</p>
      <p>{data.tratamento}</p>
      <p>{data.individuo}</p>
    </div>
  );
}
