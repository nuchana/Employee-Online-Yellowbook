import React, { Component } from "react";
import SiteHead from "./SiteHead/index";
import Navbar from "./Navbar/index";
import axios from "axios";

class EmployeeContainer extends Component {
  state = {
    employees: [],
  };

  // When this component mounts, search for employees
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
      .then(res => {
        this.setState({ employees: res.data.results });
      });
}

  render() {
    return (
      <div classname="App">
        <SiteHead />
        {this.state.employees.length > 0 &&
        <Navbar employees={this.state.employees} />}
      </div>

    );
  }
}

export default EmployeeContainer;
