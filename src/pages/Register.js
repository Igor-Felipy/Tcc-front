import SuperiorBar from './components/SuperiorBar';
import RegisterForm from './components/RegisterForm';
import TotalWrapper from './components/TotalWrapper';
import React from 'react';

class Register extends React.Component {
    render(){
        return (
            <TotalWrapper>
                <SuperiorBar />
                <RegisterForm />
            </TotalWrapper>
        )
    } 
}

export default Register;