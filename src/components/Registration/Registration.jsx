import React, { Component } from 'react';
import './Registration.scss';
import Title from "../Title/Title";
import IncrementService from '../../helpers/IncrementService'
import {
    TextField,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    Button,
    Box
} from "@material-ui/core";
import InputMask from 'react-input-mask';

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
            <Box className='RegistrationSection'>
                <Title className='RegistrationSection-Title'>Add user</Title>
                <form className='RegistrationForm' onSubmit={this.handleSubmit}>
                    <TextField
                        className='RegistrationForm-Field RegistrationForm-Field_name'
                        name="name"
                        label="Name*"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                        <TextField
                    className='RegistrationForm-Field RegistrationForm-Field_surname'
                    name="surname"
                    label="Surname*"
                    value={this.state.surname}
                    onChange={this.handleChange}/>
                    <FormControl component="fieldset"
                                 className=' RegistrationForm-RadioField RegistrationForm-Field_gender'>
                        <FormLabel className='RegistrationForm-RadioFieldLabel'
                                   component="legend">Gender</FormLabel>
                        <RadioGroup className='RegistrationForm-RadioFieldGroup'
                                    name="sex"
                                    value={this.state.sex}
                                    onChange={this.handleChange}>
                            <FormControlLabel className='RegistrationForm-RadioButton'
                                              value="female"
                                              control={<Radio />}
                                              label="Female" />
                            <FormControlLabel className='RegistrationForm-RadioButton'
                                              value="male"
                                              control={<Radio />}
                                              label="Male"/>
                            <FormControlLabel className='RegistrationForm-RadioButton'
                                              value="other"
                                              control={<Radio />}
                                              label="Other"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl className='RegistrationForm-Field RegistrationForm-Field_card'>
                        <FormLabel className='RegistrationForm-CardLabel'
                                   component="legend">Credit card*</FormLabel>
                        <InputMask
                            className='RegistrationForm-CardInput'
                            name="card"
                            label="Card"
                            value={this.state.card}
                            onChange={this.handleChange}
                            mask='9999 9999 9999 9999'
                            maskChar='_' alwaysShowMask='true'/>
                    </FormControl>

                    <FormControlLabel
                        className='RegistrationForm-Field RegistrationForm-Field_isLoyalty'
                        control={
                        <Checkbox value={this.state.isLoyalty}
                                  name="isLoyalty"
                                  onChange={this.handleChange}/>
                        }
                        label='Loyalty program'/>
                    {this.state.isLoyalty ?
                    <TextField
                        className='RegistrationForm-Field RegistrationForm-Field_coupon'
                        name="coupon"
                        label="Coupon"
                        value={this.state.coupon}
                        onChange={this.handleChange}/>
                        : null}
                        <Button className='RegistrationForm-Button' onClick={this.handleSubmit}>Create</Button>
                </form>
            </Box>
        );
    }
}

export default Registration;
