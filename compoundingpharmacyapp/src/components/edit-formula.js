import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeFormulaname = this.onChangeFormulaname.bind(this);
    this.onChangeFormulatype = this.onChangeFormulatype.bind(this);
    this.onChangeStrength = this.onChangeStrength.bind(this);
    this.onChangeNoteDate = this.onChangeNoteDate.bind(this);
    this.onChangeFormulaNote = this.onChangeFormulaNote.bind(this);
    this.onChangephName = this.onChangephName.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      formulaname: "",
      formulatype: "",
      strength: "",
      noteDate: new Date(),
      formulaNote: "",
      pharmacists: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/formulas/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          formulaname: response.data.formulaname,
          formulatype: response.data.formulatype,
          strength: response.data.strength,
          formulaNote: response.data.formulaNote,
          noteDate: new Date(response.data.noteDate),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/pharmacists/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.phName),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeFormulaname(e) {
    this.setState({
      formulaname: e.target.value,
    });
  }
  onChangephName(e) {
    this.setState({
      phName: e.target.value,
    });
  }
  onChangeFormulatype(e) {
    this.setState({
      formulatype: e.target.value,
    });
  }
  onChangeStrength(e) {
    this.setState({
      strength: e.target.value,
    });
  }
  onChangeNoteDate(e) {
    this.setState({
      noteDate: Date,
    });
  }
  onChangeFormulaNote(e) {
    this.setState({
      formulaNote: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const formula = {
      phnName: this.state.phName,
      formulaname: this.state.formulaname,
      formulatype: this.state.formulatype,
      strength: this.state.strength,
      noteDate: this.state.noteDate,
      formulaNote: this.state.formulaNote,
    };

    console.log(formula);

    axios
      .post(
        "http://localhost:5000/formulas/update/" + this.props.match.params.id,
        formula
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Formula Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Pharmacist : </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.phName}
              onChange={this.onChangephName}
            >
              {this.state.pharmacists.map(function (pharmacist) {
                return (
                  <option key={pharmacist} value={pharmacist}>
                    {pharmacist}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label> Formula Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.formulaname}
              onChange={this.onChangeFormulaname}
            />
          </div>
          <div className="form-group">
            <label> Type: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.formulatype}
              onChange={this.onChangeFormulatype}
            />
          </div>
          <div className="form-group">
            <label> Strength/Concentration: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.strength}
              onChange={this.onChangeStrength}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.noteDate}
                onChange={this.onChangeNoteDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Exercise Log"
              className="btn btn-dark"
            />
          </div>
        </form>
      </div>
    );
  }
}
