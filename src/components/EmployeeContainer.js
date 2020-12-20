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
  // Use the React DOM render() method to render the App class we created into the root div in our HTML.
  render() {
    return (
      <div classname="App">
        <SiteHead />
        {/* <Navbar employees = {this.state.employees.length > 0} /> */}
        { this.state.employees.length > 0 && 
        <Navbar employees = {this.state.employees} />}

    
    
      </div>

    );
  }
}

export default EmployeeContainer;
