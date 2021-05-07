import React, { Component } from "react";
import findEmployees from "../utils/findEmployees";
import EmployeeCard from "./EmployeeCard";

class EmployeeResults extends Component {
    state = {
        employees: []
    };

    componentDidMount() {
        findEmployees.search()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.employees.map(data => (
                        <EmployeeCard
                            id={data.login.uuid}
                            firstName={data.name.first}
                            lastName={data.name.last}
                            picture={data.picture.large}
                        />
                    ))
                    }
                </div>

            </div>

        );
    }


}

export default EmployeeResults;