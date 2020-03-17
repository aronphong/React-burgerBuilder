import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredienSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>
        });


    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredrients:</p>
            <ul>
                {ingredienSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </React.Fragment>
    );
};

export default orderSummary;