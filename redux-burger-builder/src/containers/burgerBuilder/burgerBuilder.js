import React, { Component } from 'react';
import Burger from '../../components/burger/burger';
import BurgerManager from '../../components/burgerManager/burgerManager';
import Aux from '../../hoc/hocAux';
import Modal from '../../components/Modal/Modal';
import Backdrop from '../../components/Backdrop/Backdrop';
import axios from '../../axios-order';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as action from '../../store/action/action';


class burgerBuilder extends Component {
    //creating state that will store the data of burger ingredients
    state = {
        // ingredients: null,
        itemPrice: {
            meat: 1.4,
            cheese: 0.5,
            salad: 0.3,
            bacon: 0.9
        },
        // price: 4,
        show: false,
        loading: false,
        error: null

    }

    componentDidMount() {
        // console.log(this.props);
        // this.setState({ loading: true });
        // axios.get('https://react-burger-builder-7a891.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data, loading: false })
        //     })
        //     .catch(e => {
        //         console.log(e);
        //         this.setState({ error: null, loading: false });
        //     });
        this.props.getIngredients();
    }


    toggleModalHandler = () => {
        const current = this.state.show;
        this.setState({ show: !current });
    }

    // updatePriceHandler = (ingredients) => {
    //     const items = ['meat', 'cheese', 'salad', 'bacon'];
    //     let oldPrice = 4;
    //     const itemPrice = { ...this.state.itemPrice };
    //     const updatedIngredients = { ...ingredients };
    //     items.map((item) => {
    //         oldPrice = oldPrice + (updatedIngredients[item] * itemPrice[item]);
    //         return [];
    //     });
    //     this.setState({
    //         price: oldPrice
    //     })
    // }

    continuePurchaseHandler = () => {

        this.props.history.push({
            pathname: '/checkout',
            state: { ingredients: this.props.ingredients, price: this.props.price }
        });

    }



    // addItemHandler = (item) => {
    //     let oldCount = this.props.ingredients[item];
    //     let updatedCount = oldCount + 1;
    //     let updatedIngredients = { ...this.props.ingredients }
    //     updatedIngredients[item] = updatedCount;
    //     this.setState({
    //         ingredients: updatedIngredients
    //     });
    //     this.updatePriceHandler(updatedIngredients);
    // }

    // reduceItemHandler = (item) => {
    //     let oldCount = this.state.ingredients[item];
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     let updatedCount = oldCount - 1;
    //     let updatedIngredients = { ...this.props.ingredients }
    //     updatedIngredients[item] = updatedCount;
    //     this.setState({
    //         ingredients: updatedIngredients
    //     });
    //     this.updatePriceHandler(updatedIngredients);
    // }





    render() {
        let show = null;
        let burger = null;
        if (this.state.show) {
            show = (
                <Backdrop cancel={this.toggleModalHandler}>
                    <Modal
                        ingredients={this.props.ingredients}
                        cancel={this.toggleModalHandler}
                        price={this.props.price}
                        continue={this.continuePurchaseHandler}
                    />
                </Backdrop>
            )
        }

        if (this.props.ingredients) {

            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients} />
                    <BurgerManager
                        ingredients={this.props.ingredients}
                        addItem={this.props.addItemHandler}
                        reduceItem={this.props.reduceItemHandler}
                        price={this.props.price}
                        toggleModal={this.toggleModalHandler}
                    />
                </Aux>

            );
        }


        if (this.props.loading) {
            show = (<Backdrop cancel={this.toggleModalHandler}>
                <Spinner />
            </Backdrop>)
        }

        if (this.props.error) {
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

/* Functions that will get actions and state from redux */
const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        price: state.price,
        loading: state.loading,
        error: state.error
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemHandler: (item) => { dispatch(action.addItemHandler(item)) },
        reduceItemHandler: (item) => { dispatch(action.reduceItemHandler(item)) },
        getIngredients: () => { dispatch(action.getIngredients()) },
        toggleModalHandler: () => { dispatch(action.toggleModalHandler()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(burgerBuilder, axios));