import React, { Component } from 'react';
import IncrementService from '../../helpers/IncrementService'
import {
    Paper,
    TextField,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    Button
} from "@material-ui/core";

const initData = {
    name: "",
    surname: "",
    sex: "",
    card: "",
    isLoyalty: false,
    coupon: "",
    registrationDate: new Date().toLocaleDateString()
};

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initData };
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = () => {
        this.props.addUser({ ...this.state, id: IncrementService.getNextId() });
        this.setState(initData);
    };

    render() {
        return (
            <Paper>
                <form className='' onSubmit={this.handleSubmit}>
                    <TextField
                        name="name"
                        label="name"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender"
                                    name="sex"
                                    value={this.state.sex}
                                    onChange={this.handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        name="surname"
                        label="surname"
                        value={this.state.surname}
                        onChange={this.handleChange}/>
                    <TextField
                        name="card"
                        label="card"
                        value={this.state.card}
                        onChange={this.handleChange}/>
                    <FormControlLabel control={
                        <Checkbox value={this.state.isLoyalty}
                                  name="isLoyalty"
                                  onChange={this.handleChange}/>
                    }
                    label='Loyalty program'/>
                    {this.state.isLoyalty ?
                    <TextField
                        name="coupon"
                        label="coupon"
                        value={this.state.coupon}
                        onChange={this.handleChange}/>
                        : null}
                        <Button onClick={this.handleSubmit}>Create</Button>
                </form>
            </Paper>
        );
    }
}

export default Registration;
