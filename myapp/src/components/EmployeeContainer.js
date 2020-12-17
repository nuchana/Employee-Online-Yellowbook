import React, { Component } from "react";
import SiteHead from "./SiteHead";
import Navbar from "./Navbar";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    employees: [],
  };

  // When this component mounts, search for employees
  componentDidMount() {
    this.searchEmployees("");
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div classname="App">
        <SiteHead />
        {this.state.employees.length > 0 &&
        <Navbar emplyees={this.state.employees} />}
      </div>

    );
  }
}

export default EmployeeContainer;
