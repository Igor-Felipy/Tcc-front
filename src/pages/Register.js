import SuperiorBar from './components/SuperiorBar';
import RegisterForm from './components/RegisterForm';
import TotalWrapper from './components/TotalWrapper';
import LoginForm from './components/LoginForm';
import React from 'react';

class Register extends React.Component {
    render(){
        return (
            <TotalWrapper>
                <SuperiorBar PageName="Register" ReturnButton="True" SearchButton="" ReturnURL="/login" />
                <RegisterForm />
            </TotalWrapper>
        )
    } 
}

export default Register;