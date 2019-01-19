import React from 'react';
import './Nav.css';
import BurgerImg from '../../assessts/img/burger-logo.png';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../hoc/hocAux';
import { NavLink } from 'react-router-dom';
const nav = (props) => {
    let display = null;
    let classes = "hide smallDiv";
    if (props.show) {
        classes = "show smallDiv"
        display = (
            <div className="smallShow">
                <Aux >
                    <Backdrop cancel={props.toggler}>
                        <div className="NavBarSmall">

                            <nav className={classes}>
                                <div id="div5" style={{ textAlign: "center" }}>
                                    <img src={BurgerImg} alt="logo" height="50px" />
                                </div>
                                <div id="div6" style={{ marginLeft: "auto" }}>
                                    <ul className="smallNav">
                                        <li className="smallItem">
                                            <NavLink exact to="/">BurgerBuilder</NavLink>
                                        </li>
                                        <li className="smallItem">
                                            <NavLink exact to="/orders">OrderSummary</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </Backdrop>
                </Aux>
            </div >
        );
    }



    return (
        <div className="navBar">
            <div id="div4">
                <h3 onClick={props.toggler}>Menu</h3>
            </div>
            <nav className="NavigationItems">
                <div id="div2" style={{ textAlign: "center" }}>
                    <img src={BurgerImg} alt="logo" height="50px" />
                </div>
                <div id="div3" style={{ marginLeft: "auto" }}>
                    <ul className="NavigationItem">
                        <li className="NavigationItem">
                            <NavLink exact to="/">BurgerBuilder</NavLink>
                        </li>
                        <li className="NavigationItem">
                            <NavLink exact to="/orders">OrderSummary</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            {display}
        </div>
    );
}

export default nav;