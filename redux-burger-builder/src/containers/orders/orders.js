import React, { Component } from 'react';
import axios from '../../axios-order';
import Order from '../../components/order/order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
    state = {
        orders: null
    }

    componentWillMount() {
        console.log("order component did mount");
        let Orders = [];
        axios.get('orders.json')
            .then(response => {
                console.log(response);
                const data = response.data;
                Orders = Object.keys(data).map((order) => {
                    // console.log("order", order);
                    console.log(data[order].ingredients);
                    let tempOrder = {
                        key: order,
                        ingredients: data[order].ingredients,
                        price: data[order].price,
                        address: data[order].customer.address,
                        name: data[order].customer.name,
                        email: data[order].customer.email
                    };
                    return tempOrder;
                })
                this.setState({
                    orders: Orders
                });
                console.log("ORDERS WE HAVE ", Orders);
                // this.addOrdersToState(Orders);
            })
            .catch(e => {
                console.log("ERROR in orders", e);
            })

    }


    addOrdersToState = (Orders) => {
        this.setState({
            orders: Orders
        })
    }


    render() {
        let order = <h2>NO ORDERS CURRENTLY !!!!!</h2>;
        if (this.state.orders) {
            console.log("CONDITON");
            order = this.state.orders.map((order) => {
                return <Order
                    key={order.key}
                    personalInfo={order.address}
                    name={order.name}
                    email={order.email}
                    ingredients={order.ingredients}
                    price={order.price}
                />
            });
        }

        return (
            <div>
                <h2 style={{ "marginTop": "80px" }}> ORDERS PAGE!!!!</h2 >
                {order}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);