export default function NewPost(){
    return(
        <div style={styles.total}>
            <div className="superiorBar" style={styles.superiorBar}>
                <div style={styles.superiorButton}>
                        <button onClick={redirect} style={styles.returnButton}>
                            <img src={Arrow} alt="Return Button" width="12" height="24"/>
                        </button>
                </div>
                    <div style={styles.superiorP}><p style={styles.p}>Explorar</p></div>
                    <div>
                        <button onClick={redirect} style={styles.searchButton}>
                                <img src={Search}  alt="search button" width="18" height="18"/>
                        </button>
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

}