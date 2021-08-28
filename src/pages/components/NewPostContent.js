export default function NewPostContent() {
    return (
        <div className="content" style={styles.content}>
            <div style={styles.divCaption}>
                <img src="https://source.unsplash.com/random/64x64" alt="" style={styles.profileImage} />
                <input type="text" placeholder="Compartilhe seu Feeling!"  style={styles.inputCaption} />
            </div>
            <div style={styles.divImage}>
                <input type="file" style={styles.inputFile}/>
                <button style={styles.button}>Feeling!</button>
            </div>
        </div>
    )
}

const styles = {
    content:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        margin:"30px"
    },
    divCaption:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        margin:"20px",
        marginTop:"30px"
    },
    profileImage:{
        width:"48px",
        height:"48px",
        borderRadius:"100%",
        marginRight:"40px"
    },
    inputCaption:{
        fontSize:"19px",
        color:"#828282",
        padding:"10px"
    },
    divImage:{
        marginTop:"20px"
    },
    inputFile:{
        padding: "15px 10px",
        width: "200px",
        backgroundColor: "#00BFA5",
        color: "#FFF",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "10px",
        cursor: "pointer",
        borderRadius:"5px",
        marginRight:"40px"
    },
    button:{
        backgroundColor:"#00BFA5",
        borderRadius:"5px",
        width:"130px",
        height:"50px",
        color:"#FFF",
        fontWeight:"300",
        fontSize:"16px"
    }
}