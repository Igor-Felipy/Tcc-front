import React, { useContext } from 'react';
import SuperiorBar from './components/SuperiorBar';
import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <div className="total" style={styles.total}>
      <SuperiorBar />
      <LoginForm />
    </div>
  );
}

const styles = {
total:{
  display:'flex',
  flex:'1',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-between'
},
}