import React, { useState, useContext } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hooks';
import { AuthContext } from '../../shared/context/auth-context';
import './Auth.css';
import e, { response } from 'express';
const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);
    const switchModeHandler = () =>{
        if (!isLoginMode){
            setFormData({
                ...formState.inputs,
                name: undefined
             },
             formState.inputs.email.isValid && formState.inputs.password.isValid
              
            );
            } 
            
        setIsLoginMode(prevMode => !prevMode);
       };

    const authSubmitHandler = async event => {
        event.preventDefault();
        if (isLoginMode) {
        } else {
            try {
                const response = await fetch('http://localhost:5000/api/users/singup', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    })
        });
            const responseData = await response.json();
            console.log(responseData);
        } catch (err) {
            console.log(err);
        }
    }
    auth.login();
};
return (
    <Card className="authenticaction">
        <h2>LOGIN REQUIRED</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
            {!isLoginMode && (
                
               
            <Input element="input"
                id="email"
                type="email"
                label="E-mail"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email address."
                onInput={inputHandler}
            />
            )}
            <Input element="input"
                id="password"
                type="password"
                label="Password"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid password, at least 5 characteres."
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                {isLoginMode ? 'LOGIN' : 'SIGNUP'}
            </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
            SWITCH TO SING UP {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
    </Card>
);
};

export default Auth;