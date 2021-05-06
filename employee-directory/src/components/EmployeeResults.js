import React, { Component } from "react";
import findEmployee from "../../utils/findEmployees";

class EmployeeResults extends Component() {
    state = {
        employees: []
    }

    componentDidMount() {
        findEmployee.search()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>

            </div>
        );
    }


}

export default EmployeeResults;