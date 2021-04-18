import React, { useContext } from 'react';

import { Context } from '../Context/AuthContext'

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);

  console.debug('Login', authenticated);

  return (
    <div className="total" style={styles.total}>
      <div className="superior-bar" style={styles.superiorBar}>
      </div>
      <div className="content" style={styles.content}>
        <div className="title" style={styles.title}>
          <h1 style={styles.h1}>Vamos Começar</h1>
          <p style={styles.p}>Registre-se ou entre em sua conta para ver as novidades</p>
        </div>
        <div className="form-login" style={styles.form}>
          <form>
            <div className="class-mail" style={styles.fields}>
              <label for="email" style={styles.label}>Email</label>
              <input type="text" id="name" name="senha" style={styles.input}/>
            </div>
            <div classname="class-pass" style={styles.fields}>
              <label for="senha" style={styles.label}>Senha</label >
              <input type="password" id="senha" name="senha" style={styles.input}/>
            </div>
            <div className="class-buttons" style={styles.fields}>
              <button type="button" onClick={handleLogin} style={styles.buttonLogin}>Entrar!</button>
              <button type="button" onClick={handleLogin} style={styles.buttonRegister}>Registrar</button>
            </div>
          </form>
        </div>
      </div>
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
superiorBar:{
  width:"100%",
  height:'88px',
  backgroundColor:'#00BFA5'
},
content:{
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
  justifyContent:'space-around',
},
title:{
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
  justifyContent:'space-around',
},
h1:{
  marginTop:"30px"
},
p:{
  marginTop:"30px",
  color:"#999999",
  fontSize:"17px",
  fontWeight:"300"
},
form:{
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
  justifyContent:'space-around',
  marginTop:"30px",
},
fields:{
  display:"flex",
  flexDirection:"column",
  justifyContent:'space-around',
  marginTop:"30px",
},
label:{
  fontSize:"15px",
  fontWeight:"900"
},
input:{
  marginTop:"18px",
  border: "1px solid rgba(228, 228, 228, 0.85)",
  width:"600px",
  height:"55px",
  borderRadius: "5px",
  fontWeight: "300",
  fontSize: "13px",
  padding:"5px"
},
buttonLogin:{
  width:"600px",
  height:"55px",
  marginTop:"10px",
  backgroundColor:"#00BFA5",
  borderRadius: "5px",
  fontWeight: "300",
  fontSize: "16px",
  color:"#FFF",
  cursor: "pointer",
  boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.5)"
},
buttonRegister:{
  width:"600px",
  height:"55px",
  marginTop:"10px",
  backgroundColor:"#fff",
  color: "#056162",
  fontWeight: "300",
  fontSize: "15px",
  cursor: "pointer",
}
}