import React, { useState, useEffect } from "react";
import { Form, Input } from "@rocketseat/unform";
import api from "../../services/api";
import moment from "moment";
import { Container } from "./styles";
import { Link } from "react-router-dom";

import * as Yup from "yup";

const schema = Yup.object().shape({
  nome: Yup.string().required("Campo Obrigatório"),
  validade: Yup.date()
    .min(
      moment(Date.now()).format("YYYY-MM-DD"),
      "Medicamento fora da validade!"
    )

    .required("Campo Obrigatório"),
  tratamento: Yup.string().required(),
  formasdeUso: Yup.string().required(),
  individuo: Yup.string().required()
});

export default function MedicamentosForm({ history, match }) {
  const [data, setData] = useState({});

  async function handleSubmit(data) {
    const { id } = match.params;
    await api.postOrPut(`/medicamento`, id, data);

    history.push("/medicamentos");
  }
  useEffect(() => {
    async function loadData() {
      const { id } = match.params;
      const response = await api.get(`/medicamento/${id}`);
      setData(response.data);
    }
    if (match.params.id) {
      loadData();
    }
  }, [match.params, match.params.id]);
  return (
    <Container>
      <label>-- Cadastro de Medicamento --</label>{" "}
      <Link to={"/medicamentos"}>&#8617;</Link>
      <Form schema={schema} initialData={data} onSubmit={handleSubmit}>
        <Input name="nome" label="Nome" />
        <Input name="validade" label="Validade" type="date" />
        <Input name="tratamento" label="Indicação clinica" />
        <Input name="individuo" label="Paciente" />
        <Input name="formasdeUso" label="Formas de Uso" />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
