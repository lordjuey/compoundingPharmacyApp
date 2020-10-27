import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Formulas = props => (
  <tr>
    <td>{props.formula.formulaname}</td>
    <td>{props.formula.formulatype}</td>
    <td>{props.formula.strength}</td>
    <td>{props.formula.formulaNote}</td>
    <td>{props.formula.noteDate.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.formula._id}>edit</Link> | <a href="#" onClick={() => { props.deleteFormula(props.formula._id) }}>delete</a>
    </td>
  </tr>
)

export default class FormulaList extends Component {
  constructor(props) {
    super(props);

    this.deleteFormula = this.deleteFormula.bind(this)

    this.state = {formulas: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/formulas/')
      .then(response => {
        this.setState({ formulas: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteFormula(id) {
    axios.delete('http://localhost:5000/formulas/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      formulas: this.state.formulas.filter(el => el._id !== id)
    })
  }

  formulaList() {
    return this.state.formulas.map(currentformula => {
      return <Formulas formula={currentformula} deleteFormula={this.deleteFormula} key={currentformula._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Flagged formulas</h3>
        <br></br>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Formula Name</th>
              <th>Formula type</th>
              <th>Strength</th>
              <th>Note/Issues</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.formulaList() }
          </tbody>
        </table>
      </div>
    )
  }
}