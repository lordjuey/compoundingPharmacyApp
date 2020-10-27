import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import FormulaList from "./components/formulaList";
import EditFormula from "./components/edit-formula";
import AddFormula from "./components/add-formula";
import AddPharmacist from "./components/add-pharmacist";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Route path="/" exact component={Dashboard} />
        <Route path="/formulaList" exact component={FormulaList} />
        <Route path="/edit/:idcreate" component={EditFormula} />
        <Route path="/create" component={AddFormula} />
        <Route path="/pharmacist" component={AddPharmacist} />
      </div>
    </Router>
  );
}

export default App;
