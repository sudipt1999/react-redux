import React, { Component } from 'react';
import CheckoutSummary from './checkoutSummary/checkoutSummary';
import Burger from '../../components/burger/burger';
import { Route } from 'react-router-dom';
import './checkout.css';
import axios from '../../axios-order';
import Spinner from '../../components/Spinner/Spinner';

class Checkout extends Component {

    state = {
        ingredients: {},
        customer: {
            name: '',
            address: {
                street: '',
                zipcode: '',
                country: ''
            },
            email: '',
            deliveryMethod: 'fastest'
        },
        error: null,
        price: 4,
        loading: false,
        pagePush: false
    }

    componentWillMount() {
        console.log(this.props);
        this.setState({
            ingredients: this.props.location.state.ingredients,
            price: this.props.location.state.price
        })
    }

    addOrderSummaryPage = () => {
        const currentUrl = this.props.match.url;
        this.props.history.push(currentUrl + "/orderSummary");
        this.setState({ pagePush: true });
    }

    getCustomerInfo = (event, value) => {
        var customer = this.state.customer;
        if (value === 'name') {
            customer.name = event.target.value;
        }
        if (value === 'address-street') {
            customer.address.street = event.target.value;
        }
        if (value === 'address-country') {
            customer.address.country = event.target.value;
        }
        if (value === 'address-zipcode') {
            customer.address.zipcode = event.target.value;
        }
        if (value === 'email') {
            customer.email = event.target.value;
        }
        if (value === "delivery-method") {
            customer.deliveryMethod = event.target.value;
        }
        this.setState({ customer: customer });
    }

    formValidation = () => {
        const customer = { ...this.state.customer };
        if (customer.name.trim().length < 4) {
            return {
                state: false,
                error: "Name can't be too short"
            }
        }
        if (!customer.email.includes('@') || customer.email.trim().length < 8) {
            return {
                state: false,
                error: "Email is invalid"
            }
        }
        return {
            state: true,
            error: null
        }
    }

    confirmOrderHandler = (event) => {
        event.preventDefault();
        let validated = this.formValidation();
        if (!validated.state) {
            this.setState({ error: validated.error });
            return;
        }
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price.toFixed(2),
            customer: this.state.customer
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response)
                this.setState({
                    show: false,

                })
                this.props.history.push("/");
            })
            .catch(e => {
                this.setState({
                    show: false,
                })
                console.log(e);
            });
    }

    render() {
        let spinner = null;
        if (this.state.pagePush) {
            spinner = (
                <Route to={this.props.match.url + "/orderSummary"} exact render={() => <CheckoutSummary
                    confirm={this.confirmOrderHandler}
                    customerInfo={(event, value) => this.getCustomerInfo(event, value)}
                    customer={this.state.customer}
                    error={this.state.error}
                />} />
            );
        }
        if (this.state.loading) {
            spinner = <Spinner />
        }



        return (
            <div className="checkoutDiv">
                <h1 style={{ "marginTop": "80px", "textAlign": "center" }}>Looks Delicious !</h1>
                <Burger ingredients={this.state.ingredients} />
                <p style={{ "textAlign": "center" }}><strong>TOTAL PRICE IS </strong> <em>$ {this.state.price.toFixed(2)}</em></p>
                <button className="Btn" onClick={this.addOrderSummaryPage}>Order Now</button>
                {spinner}
            </div>

        )

    }
}


export default Checkout;