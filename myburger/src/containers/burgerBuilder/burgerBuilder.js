import React, { Component } from 'react';
import Burger from '../../components/burger/burger';
import BurgerManager from '../../components/burgerManager/burgerManager';
import Aux from '../../hoc/hocAux';
import Modal from '../../components/Modal/Modal';
import Backdrop from '../../components/Backdrop/Backdrop';
import axios from '../../axios-order';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



class burgerBuilder extends Component {
    //creating state that will store the data of burger ingredients
    state = {
        ingredients: null,
        itemPrice: {
            meat: 1.4,
            cheese: 0.5,
            salad: 0.3,
            bacon: 0.9
        },
        price: 4,
        show: false,
        loading: false,
        error: null

    }

    componentDidMount() {
        console.log(this.props);
        this.setState({ loading: true });
        axios.get('https://react-burger-builder-7a891.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data, loading: false })
            })
            .catch(e => {
                console.log(e);
                this.setState({ error: null, loading: false });
            });
    }


    toggleModalHandler = () => {
        const current = this.state.show;
        this.setState({ show: !current });
    }

    updatePriceHandler = (ingredients) => {
        const items = ['meat', 'cheese', 'salad', 'bacon'];
        let oldPrice = 4;
        const itemPrice = { ...this.state.itemPrice };
        const updatedIngredients = { ...ingredients };
        items.map((item) => {
            oldPrice = oldPrice + (updatedIngredients[item] * itemPrice[item]);
            return [];
        });
        this.setState({
            price: oldPrice
        })
    }

    continuePurchaseHandler = () => {

        this.props.history.push({
            pathname: '/checkout',
            state: { ingredients: this.state.ingredients, price: this.state.price }
        });

    }



    addItemHandler = (item) => {
        let oldCount = this.state.ingredients[item];
        let updatedCount = oldCount + 1;
        let updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[item] = updatedCount;
        this.setState({
            ingredients: updatedIngredients
        });
        this.updatePriceHandler(updatedIngredients);
    }

    reduceItemHandler = (item) => {
        let oldCount = this.state.ingredients[item];
        if (oldCount <= 0) {
            return;
        }
        let updatedCount = oldCount - 1;
        let updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[item] = updatedCount;
        this.setState({
            ingredients: updatedIngredients
        });
        this.updatePriceHandler(updatedIngredients);
    }





    render() {
        let show = null;
        let burger = null;
        if (this.state.show) {
            show = (
                <Backdrop cancel={this.toggleModalHandler}>
                    <Modal
                        ingredients={this.state.ingredients}
                        cancel={this.toggleModalHandler}
                        price={this.state.price}
                        continue={this.continuePurchaseHandler}
                    />
                </Backdrop>
            )
        }

        if (this.state.ingredients) {

            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BurgerManager
                        ingredients={this.state.ingredients}
                        addItem={this.addItemHandler}
                        reduceItem={this.reduceItemHandler}
                        price={this.state.price}
                        toggleModal={this.toggleModalHandler}
                    />
                </Aux>

            );
        }


        if (this.state.loading) {
            show = (<Backdrop cancel={this.toggleModalHandler}>
                <Spinner />
            </Backdrop>)
        }

        if (this.state.error) {
            show = null;
            burger = <p>An Error Occured !!!</p>
        }

        return (
            <Aux>
                {show}
                {burger}
            </Aux>
        );
    };

}

export default withErrorHandler(burgerBuilder, axios);