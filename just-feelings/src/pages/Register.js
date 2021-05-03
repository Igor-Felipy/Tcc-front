import Vector from './imgs/Vector.svg';

import history from '../history';

export default function redirect() {
    function redirect() {
        history.push('/login');
    }
    return (
        <div className="total" style={StyleSheet.total}>
            <div className="superiorBar" style={styles.superiorBar}>
                <div style={styles.superiorButton}>
                    <button onClick={redirect} style={styles.returnButton}>
                        <img src={Vector} alt="Return Button" width="12" height="24"/>
                    </button>
                </div>
                <div style={styles.superiorP}><p style={styles.p}>Registrar</p></div>
                <div></div>
            </div>
            <form style={styles.form}>
                <div className="class-name" style={styles.fields}>
                    <label for="nome" style={styles.label}>Nome</label>
                    <input type="text" id="nome" name="nome" style={styles.input}/>
                </div>
                <div className="class-user" style={styles.fields}>
                    <label for="user" style={styles.label}>Usuário</label>
                    <input type="text" id="user" name="user" style={styles.input}/>
                </div>
                <div className="class-email" style={styles.fields}>
                    <label for="email" style={styles.label}>Email</label>
                    <input type="text" id="email" name="email" style={styles.input}/>
                </div>
                <div className="class-pass" style={styles.fields}>
                    <label for="password" style={styles.label}>Password</label>
                    <input type="password" id="password" name="password" style={styles.input}/>
                </div>
                <div className="class-birthday" style={styles.fields}>
                    <label for="birthday" style={styles.label}>Data de Nascimento</label>
                    <input type="date" id="birthday" name="birthday" style={styles.input}/>
                </div>
                <div className="class-buttons" style={styles.fields}>
                    <button type="button" style={styles.button}>Registrar</button>    
                </div>
            </form>
        </div>
    )
}

const styles = {
total:{
    display:'flex',
    flex:'1',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
},
superiorBar:{
    width:"100%",
    height:'88px',
    backgroundColor:'#00BFA5',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"flex-end",
},
superiorButton:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:"baseline",
    margin:"10px 20px",
},
returnButton:{
    cursor:"pointer",
    backgroundColor:"#00BFA5"
},
superiorP:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"baseline",
    margin:"10px"
},
p:{
    fontSize:"17px",
    fontWeight:"900"
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
button:{
    width:"608px",
    height:"63px",
    marginTop:"10px",
    backgroundColor:"#00BFA5",
    borderRadius: "5px",
    fontWeight: "300",
    fontSize: "16px",
    color:"#FFF",
    cursor: "pointer",
    boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.5)"
}
}