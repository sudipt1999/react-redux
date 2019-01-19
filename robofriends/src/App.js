import React, { Component } from 'react';

import CardList from './CardList';
import { robot } from './robot';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';




class App extends Component {
    constructor() {
        super();
        this.state = {
            robot: robot,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);


    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => { return response.json() })
            .then(user => {
                this.setState({ robot: user })
            });
    }

    render() {
        const Robot = [...this.state.robot];
        const filterRobot = Robot.filter(robot => {
            console.log(robot);
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        // console.log("ROBOTs", this.state.robot);
        // const filterRobot = [];
        // for (let i in this.state.robot) {
        //     if (this.state.robot[i].name.toLowerCase().includes(this.state.searchfield.toLowerCase())) {
        //         filterRobot.push(robot);
        //     }
        //     console.log("RO", filterRobot);
        // }
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robot={filterRobot} />
                </Scroll>
            </div>
        );
    }
}

export default App;