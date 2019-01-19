import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './Container/CardList';
// import { robot } from './Container/robot';
import SearchBox from './Container/SearchBox';
import './App.css';
import Scroll from './Container/Scroll';




class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robot: robot,
    //         searchfield: ''
    //     }
    // }
    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => { return response.json() })
    //         .then(user => {
    //             this.setState({ robot: user })
    //         });
    // }

    render() {
        const Robot = [...this.props.robot];
        const filterRobot = Robot.filter(robot => {
            console.log(robot);
            return robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase());
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
                <SearchBox searchChange={(event) => this.props.onSearchChange(event)} />
                <Scroll>
                    <CardList robot={filterRobot} />
                </Scroll>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        robot: state.robot,
        searchfield: state.searchfield
    }
}

const mapActionToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch({ type: 'SEARCH_FIELD_CHANGE', value: event.target.value })
    }
}


export default connect(mapStateToProps, mapActionToProps)(App);