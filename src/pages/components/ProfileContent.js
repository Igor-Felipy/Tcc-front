export default function ProfileContent() {
    return (
        <div className="content" style={styles.content}>
            <div className="profileData" style={styles.profileData}>
                <img src="https://source.unsplash.com/random/100x100" style={styles.profileImage} alt="" />
                <div style={styles.dataDiv}>
                    <h1 style={styles.profileName}>justFeelings_</h1>
                    <p style={styles.profileCaption}>Aqui está uma legenda. Uma beeeela legenda...</p>
                    <div style={styles.divNumbers}>
                        <div style={styles.separator}>
                            <p style={styles.number1}>438</p>
                            <p style={styles.number2}>Posts</p>
                        </div>                        
                        <div style={styles.separator}>
                            <p style={styles.number1}>298</p>
                            <p style={styles.number2}>Seguindo</p>
                        </div>
                        <div style={styles.separator}>
                            <p style={styles.number1}>321k</p>
                            <p style={styles.number2}>Seguidores</p>
                        </div>
                    </div>
                    
                </div>
                <div style={styles.editFollow}>
                    <button style={styles.editFollowButton}>Edit</button>
                    <p style={styles.percentage}>5/10</p>
                </div>
            </div>
            <div className="divPosts" style={styles.divPosts}>
                <button style={styles.postButton}>
                    <img src="https://source.unsplash.com/random/800x600" style={styles.imagePost}  alt=""/>
                </button> 
                <button style={styles.postButton}>
                    <img src="https://source.unsplash.com/random/800x600" style={styles.imagePost}  alt=""/>
                </button> 
                <button style={styles.postButton}>
                    <img src="https://source.unsplash.com/random/800x600" style={styles.imagePost}  alt=""/>
                </button> 
                <button style={styles.postButton}>
                    <img src="https://source.unsplash.com/random/800x600" style={styles.imagePost}  alt=""/>
                </button> 
                <button style={styles.postButton}>
                    <img src="https://source.unsplash.com/random/800x600" style={styles.imagePost}  alt=""/>
                </button>    
            </div> 
        </div>
    )
}

const styles = {
    content:{
        width:"70%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:"20px"
    },
    profileData:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    profileImage:{
        width:'100px',
        height:"100px",
        borderRadius:"100%",
        marginRight:"30px"
    },
    dataDiv:{
        display:"flex",
        flexDirection:'column'
    },
    profileName:{
        fontSize:"20px",
        color:"#151522"
    },
    profileCaption:{
        fontSize:"13px",
        fontWeight:"300",
        color:"#666666",
        margin:"10px 0px"
    },
    divNumbers:{
        display:"flex",
        flexDirection:"row",
        margin:"10px"
    },
    separator:{
        margin:"0px 15px"
    },
    number1:{
        fontSize:"17px",
        fontWeight:"900",
        color:"#151522"
    },
    number2:{
        fontSize:"13",
        color:"#666666",
    },
    editFollow:{
        margin:"20px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    editFollowButton:{
        width:"150px",
        height:"50px",
        borderRadius:"5px",
        backgroundColor:"#00BFA5",
        color:"#FFF",
        fontSize:"16px",
        fontWeight:"300",
        margin:"10px"
    },
    percentage:{
        fontSize:"18px",
    },



    divPosts:{
        float: "left",
        width: "700px",
        margin:"30px"
    },
    postButton:{
        margin:"10px",
        cursor:"pointer"
    },
    imagePost:{
        width:"150px",
        height:"150px",
        borderRadius:"10px",
    }
}