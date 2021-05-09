import React, { Component } from "react";
import findEmployees from "../utils/findEmployees";
import EmployeeCard from "./EmployeeCard";
import NavBar from "./NavBar";


class EmployeeResults extends Component {
    state = {
        employees: [],
        search: "",
    };

    componentDidMount() {
        findEmployees.search()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = (e) => {
        this.setState({ search: e.target.value });
        const newArray = this.state.employees.filter(data => {
            if (data.name.first.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data;
            }
            else if (data.name.last.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data;
            }
        });
        this.setState({ employees: newArray });
    }

    handleSort = () => {
        const compare = (a, b) => {
            const nameA = a.name.first;
            const nameB = b.name.first;
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        }

        const sorted = this.state.employees.sort(compare);
        this.setState({ employees: sorted });
    }

    render() {
        return (
            <div>
                <NavBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSort={this.handleSort}
                />
                <div className="container">
                    <div className="row">
                        {this.state.employees.map(data => (
                            <EmployeeCard
                                id={data.login.uuid}
                                firstName={data.name.first}
                                lastName={data.name.last}
                                picture={data.picture.large}
                                username={data.login.username}
                                email={data.email}
                                phone={data.phone}
                            />
                        ))
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default EmployeeResults;