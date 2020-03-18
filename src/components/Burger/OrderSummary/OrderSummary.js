import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class orderSummary extends Component {
    useEffect() {
        console.log('OrderSummary will update')
    }
    
    render() {

        const ingredienSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
        });

        return (
            <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredrients:</p>
            <ul>
                {ingredienSummary}
            </ul>
            <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
        </React.Fragment>
    )}
};

export default orderSummary;