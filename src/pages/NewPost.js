import Arrow from './imgs/arrow.svg';
import Search from './imgs/search.svg';

export default function NewPost(){
    return(
        <div style={styles.total}>
            <div className="superiorBar" style={styles.superiorBar}>
                <div style={styles.superiorButton}>
                        <button onClick={{}} style={styles.returnButton}>
                            <img src={Arrow} alt="Return Button" width="12" height="24"/>
                        </button>
                </div>
                    <div style={styles.superiorP}><p style={styles.p}>New Post</p></div>
                    <div>
                        <button onClick={{}} style={styles.searchButton}>
                                <img src={Search}  alt="search button" width="18" height="18"/>
                        </button>
                    </div>
            </div>
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
        </div>
    );
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
        backgroundColor:"#00BFA5",
    },
    superiorP:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"baseline",
        margin:"10px",
        fontSize:"17px",
        fontWeight:"900"
    },
    searchButton:{
        margin:"10px",
        backgroundColor:"#00BFA5"
    },
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