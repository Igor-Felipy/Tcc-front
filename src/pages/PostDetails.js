import Heart from './imgs/heart.svg';
import Comments from './imgs/comments.svg';
import Share from './imgs/share.svg';
import Arrow from './imgs/arrow.svg';
import Search from './imgs/search.svg';

export default function Post(){
    return (
        <div style={styles.total}>
            <div className="superiorBar" style={styles.superiorBar}>
                <div style={styles.superiorButton}>
                        <button onClick={window.history.back} style={styles.returnButton}>
                            <img src={Arrow} alt="Return Button" width="12" height="24"/>
                        </button>
                </div>
                    <div style={styles.superiorP}><p style={styles.p}>Reações</p></div>
                    <div>
                        <button style={styles.searchButton}>
                                <img src={Search}  alt="search button" width="18" height="18"/>
                        </button>
                    </div>
            </div>
            <div className="content" style={styles.content}>
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
                <div className="comments" style={styles.divComments}>
                    <div className="comment" style={styles.comment}>
                        <img src="https://source.unsplash.com/random/64x64" alt="" style={styles.commentImage}/>
                        <div className="CommentContent" style={styles.commentContent}>
                            <a href="/usr" style={styles.commentUsername}>Nome</a>
                            <p style={styles.commentText}>Comment</p>
                        </div>
                    </div>
                </div>
            </div>

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
        marginBottom:"20px"
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
        justifyContent:"space-around",
        flexDirection:"row",
    },


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



    divComments:{
        display:"flex",
        flexDirection:'column',
        justifyContent:"flex-start",
        alignItems:"flex-start",
        width:"20vw"
        //overflowY: "scroll",
        //height: "100%"
    },
    h1:{
        color:"#151522"
    },
    comment:{
        marginLeft:"30px",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"center"
    },
    commentImage:{
        borderRadius:"100%",
        marginRight:"10px",
        height:"37px",
        width:"37px"
    },
    commentUsername:{
        color:"#151522",
        fontWeight:"bold",
        fontSize:"15px",
        textDecoration:"none"
    },
    commentContent:{

    },
}