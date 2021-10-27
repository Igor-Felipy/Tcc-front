import React from 'react';
import SuperiorBar from '../components/SuperiorBar';
// import LoginForm from './components/LoginForm';
import TotalWrapper from '../components/TotalWrapper';

class Login extends React.Component {
  render() {
    return (
      <TotalWrapper>
        <SuperiorBar />
        {/* <LoginForm /> */}
      </TotalWrapper>
    );
  }
}

export default Login;