/* This is a root compnent That will render each and evry thing
1.navigation bar {stateless component}
2.burger{stateful component}
*/

import React, { Component } from 'react';
import Aux from '../../hoc/hocAux';
import Nav from '../Nav/Nav';

class Layout extends Component {
    state = {
        showNav: false
    }

    showNavToggler = () => {
        const show = this.state.showNav;
        this.setState({
            showNav: !show
        })
    }

    render() {
        return (
            <Aux>
                <Nav
                    show={this.state.showNav}
                    toggler={this.showNavToggler}
                />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;