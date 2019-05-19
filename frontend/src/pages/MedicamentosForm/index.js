import React from "react";
import { Form, Input } from "@rocketseat/unform";

// import { Container } from './styles';

export default function MedicamentosForm() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="nome" label="Nome" />
      <Input name="validade" label="Validade" />
      <Input name="tratamento" label="Indicação clinica" />
      <Input name="individuo" label="Paciente" />
      <Input name="formasdeUso" label="Formas de Uso" />
      <button type="submit">Enviar</button>
    </Form>
  );
}
