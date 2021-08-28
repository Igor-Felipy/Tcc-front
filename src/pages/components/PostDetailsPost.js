import Heart from '../imgs/heart.svg';
import Comments from '../imgs/comments.svg';
import Share from '../imgs/share.svg';

export default function PostDetailsPost() {
    return (
        <div className="post" style={styles.post}>
            <div className="post-content" style={styles.postContent}>
                <div className="userData" style={styles.userData}>
                    <img alt="" src="https://source.unsplash.com/random/64x64" style={styles.postProfilePic}/>
                    <div className="userDataContent">
                        <a href="${}" style={styles.postUsername}>nome</a>
                        <p style={styles.postDate}>data</p>
                    </div>
                </div>
                <div className="image" style={styles.postDivImage}>
                    <img src="https://source.unsplash.com/random/800x600" alt="" style={styles.postImage}/>
                </div>
                <div className="buttons" style={styles.postButtons}>
                    <div className="leftButtons" style={styles.leftButtons}>
                        <button style={styles.postButton}>
                            <img src={Heart} alt="" width="31" height="28"/>
                        </button>
                        <button style={styles.postButton}>
                            <img src={Comments} alt="" width="31" height="28"/>
                        </button>
                    </div>
                    <div className="rightButtons" style={styles.rightButtons}>
                        <button style={styles.postButton}>
                            <img src={Share} alt="" width="31" height="28"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="analitics">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}

const styles = {
    post:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",       
    },
    postContent:{
        display:"flex",
        alignItems:"left",
        justifyContent:"center",
        flexDirection:"column"    
    },
    userData:{
        display:"flex",
        flexDirection:"row",
    },
    postProfilePic:{
        width:"54px",
        height:"54px",
        borderRadius:"100%",
        marginRight:"10px"
    },
    postUsername:{
        color:"#151522",
        fontWeight:"bold",
        fontSize:"15px",
        textDecoration:"none"
    },
    postDate:{
        color:"#999999",
        fontWeight:"500",
        fontSize:"14px"
    },
    postImage:{
        borderRadius:"10px",
        marginTop:"10px",
        width:"600px",
        height:"auto"
    },
    postButtons:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    postButton:{
        margin:"10px",
        backgroundColor:"#FFF"
    },
}