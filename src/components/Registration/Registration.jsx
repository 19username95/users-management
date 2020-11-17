import React, { Component } from 'react';
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
import './Registration.scss';
import Title from "../Title/Title";
import IncrementService from '../../helpers/IncrementService'

const initData = {
    name: "",
    surname: "",
    sex: "",
    card: "",
    isLoyalty: false,
    coupon: "",
};

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = { ...initData };
    }

    handleChange = ({ target }) => {
        let value = '';

        if(target.type === 'checkbox') {
            value = target.checked;
        }
        else if(['name', 'surname'].includes(target.name)) {
            value = target.value.replace(/[^A-Za-z]/gi, "");
        }
        else {
            value = target.value;
        }

        this.setState({
            [target.name]: value,
        });
    };

    handleSubmit = () => {
        const id = IncrementService.getNextId()
        const {
            name,
            surname,
            sex,
            card,
            isLoyalty,
            coupon
        } = this.state

        this.props.addUser({
            id,
            name,
            surname,
            sex,
            card,
            isLoyalty,
            coupon,
            registrationDate: new Date().toLocaleDateString()
        });
        const message = `User #${id}: ${this.state.name} ${this.state.surname} successfully added.`
        this.setState({ ...initData, message });
    };

    clearMessage = () => {
        this.setState({ message: '' });
    }

    componentWillUnmount() {
        this.clearMessage();
    }

    isDataValid() {
        const {
            name,
            surname,
            sex,
            isLoyalty,
            coupon
        } = this.state;

        return name.trim().length &&
            surname.trim().length &&
            sex.length &&
            (!isLoyalty || coupon.trim().length)
    }

    render() {
        const {
            message,
            name,
            surname,
            sex,
            card,
            isLoyalty,
            coupon
        } = this.state;
        return (
            <Box className='RegistrationSection'>
                <Title className='RegistrationSection-Title'>Add user</Title>
                <div className='RegistrationSection-Message RegistrationSection-Message_success'>{message}</div>
                <form className='RegistrationForm'
                      onSubmit={this.handleSubmit}
                      onFocus={this.clearMessage}>
                    <TextField
                        className='RegistrationForm-Field RegistrationForm-Field_name'
                        name="name"
                        label="Name"
                        required
                        value={name}
                        onChange={this.handleChange}/>
                        <TextField
                    className='RegistrationForm-Field RegistrationForm-Field_surname'
                    name="surname"
                    label="Surname"
                    required
                    value={surname}
                    onChange={this.handleChange}/>
                    <FormControl component="fieldset"
                                 className=' RegistrationForm-RadioField RegistrationForm-Field_gender'
                                 required>
                        <FormLabel className='RegistrationForm-RadioFieldLabel'
                                   component="legend">Gender</FormLabel>
                        <RadioGroup className='RegistrationForm-RadioFieldGroup'
                                    name="sex"
                                    value={sex}
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
                                   component="legend">Credit card</FormLabel>
                        <InputMask
                            className='RegistrationForm-CardInput'
                            name="card"
                            label="Card"
                            value={card}
                            onChange={this.handleChange}
                            mask='9999 9999 9999 9999'
                            maskChar='_'
                            alwaysShowMask='true'/>
                    </FormControl>

                    <FormControlLabel
                        className='RegistrationForm-Field RegistrationForm-Field_isLoyalty'
                        control={
                        <Checkbox checked={isLoyalty}
                                  name="isLoyalty"
                                  onChange={this.handleChange}/>
                        }
                        label='Loyalty program'/>
                    {isLoyalty ?
                    <TextField
                        className='RegistrationForm-Field RegistrationForm-Field_coupon'
                        name="coupon"
                        label="Coupon"
                        required
                        value={coupon}
                        onChange={this.handleChange}/>
                        : null}
                    <Button className='RegistrationForm-Button'
                        type='submit'
                        disabled={!this.isDataValid()}
                        onClick={this.handleSubmit}
                    >Create</Button>
                </form>
            </Box>
        );
    }
}

export default Registration;
