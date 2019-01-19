import React from 'react';
import Aux from '../../../hoc/hocAux';
import './checkoutSummary.css';

const checkoutSummary = (props) => {
    let error = null;
    if (props.error) {
        error = <p className="error-msg">{props.error}</p>
    }
    return (
        <Aux>
            <h3>Please Fill The Form</h3>
            <form className="form">
                <div className="form-box">
                    <label className="label">Name</label>
                    <input className="input"
                        onChange={(event) => props.customerInfo(event, "name")}
                        type="text" name="name"
                        placeholder="Your Name"
                        value={props.customer.name} />
                </div>
                <div className="form-box">
                    <label className="label">Email</label>
                    <input className="input"
                        onChange={(event) => props.customerInfo(event, "email")}
                        type="email" name="email"
                        placeholder="Your Name"
                        value={props.customer.email} />
                </div>
                <div className="form-box">
                    <label className="label">Street</label>
                    <input className="input"
                        onChange={(event) => props.customerInfo(event, "address-street")}
                        type="text" name="street"
                        placeholder="Your street"
                        value={props.customer.street} />
                </div>
                <div className="form-box">
                    <label className="label">Country</label>
                    <input className="input"
                        onChange={(event) => props.customerInfo(event, "address-country")}
                        type="text" name="country"
                        placeholder="Your country"
                        value={props.customer.country} />
                </div>
                <div className="form-box">
                    <label className="label">Zipcode</label>
                    <input className="input"
                        onChange={(event) => props.customerInfo(event, "address-zipcode")}
                        type="text" name="zipcode"
                        placeholder="Your zipcode"
                        value={props.customer.zipcode} />
                </div>
                <div className="form-box">
                    <label className="label">Method</label>
                    <select className="input" onChange={(event) => props.customerInfo(event, "delivery-method")}>
                        <option value="fastest">Fastest</option>
                        <option value="cheapest">Cheapest</option>
                        <option value="average">Average</option>
                    </select>
                </div>
                {error}
                <button className="Btn" onClick={props.confirm}>Order !</button>
            </form>
        </Aux>
    )
}

export default checkoutSummary;