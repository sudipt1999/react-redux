import React, { Component } from 'react';
import Aux from '../hocAux';
import './withErrorHandler.css';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            console.log("[withERROR HaNDLER   ] ---------");
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            })
        }

        componentWillUnmount() {
            console.log("[UNMOUNT", this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorToggler = () => {
            this.setState({
                error: null
            })
        }

        render() {
            return (
                <Aux>
                    {(this.state.error) ? (
                        <div className="ModalDiv"
                            onClick={this.errorToggler}
                        >
                            {this.state.error ? this.state.error.message : null}
                        </div>) : null}
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }

    }

}

export default withErrorHandler;