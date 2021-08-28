import React, { useContext } from 'react';
import SuperiorBar from './components/SuperiorBar';
import LoginForm from './components/LoginForm';
import TotalWrapper from './components/TotalWrapper';

export default function Login() {
  return (
    <TotalWrapper>
      <SuperiorBar />
      <LoginForm />
    </TotalWrapper>
  );
}
