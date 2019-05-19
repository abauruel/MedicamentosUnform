import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MedicamentosForm from "./pages/MedicamentosForm";
import MedicamentosList from "./pages/MedicamentosList";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Medicamentos" exact component={MedicamentosList} />

        <Route path="/Medicamentos/create" component={MedicamentosForm} />
        <Route path="/Medicamento/edit/:id" component={MedicamentosForm} />
      </Switch>
    </BrowserRouter>
  );
}
