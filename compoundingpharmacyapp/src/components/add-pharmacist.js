import React, { Component } from "react";
import axios from 'axios';

export default class AddPharmacist extends Component {
  constructor(props) {
    super(props);

    this.onChangephName = this.onChangephName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      phName: '',
    };
  }

  onChangephName(e) {
    this.setState({
      phName: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const pharmacist = {
      phName: this.state.phName,
    };

    console.log(pharmacist);

    axios.post('http://localhost:5000/pharmacists/add', pharmacist)
        .then (res=> console.log(res.data));


    this.setState({
           phName: ''
    })
  }

  render() {
    return (
        <div>
        <h3>Add New Pharmacist</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Pharmacist: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.phName}
                onChange={this.onChangephName}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create pharmacist" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
