export default function RegisterForm() {
    return (
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
    )
}

const styles = {
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