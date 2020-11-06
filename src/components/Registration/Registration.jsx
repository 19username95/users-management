import React, {Component} from 'react';
import {getCurrentId} from '../../helpers/id-maker'

const initData = {
    id: getCurrentId,
    name: "",
    surname: "",
    sex: "",
    card: "",
    isLoyalty: false,
    coupon: "",
    registrationDate: new Date()
};

class Registration extends Component {

    state = {...initData };

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = () => {
        console.log(this.state);
        this.props.addUser(this.state);
        this.setState(initData);
    };

    render() {
        return (
            <section>
                <div>
                    <label>
                        User Name
                        <input
                            type="text"
                            value={this.state.name}
                            name="name"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Gender
                        <input
                            type="text"
                            value={this.state.sex}
                            name="sex"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Credit Card
                        <input
                            type="text"
                            value={this.state.card}
                            name="card"
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Use coupon?
                        <input
                            type="checkbox"
                            value={this.state.isLoyalty}
                            name="isLoyalty"
                            onChange={this.handleChange}
                        />
                    </label>
                    {this.state.isLoyalty ? (
                        <label>
                            Coupon
                            <input
                                type="text"
                                value={this.state.coupon}
                                name="coupon"
                                onChange={this.handleChange}
                            />
                        </label>
                    ) : null}
                </div>
                <button onClick={this.handleSubmit}>Send</button>
            </section>
        );
    }
}

export default Registration;
