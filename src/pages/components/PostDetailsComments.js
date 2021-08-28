
export default function PostDetailsComments() {
    return (
        <div style={styles.divComments}>
            <div style={styles.comment}>
                <img src="https://source.unsplash.com/random/64x64" alt="" style={styles.commentImage}/>
                <div style={styles.commentContent}>
                    <a href="/usr" style={styles.commentUsername}>Nome</a>
                    <p style={styles.commentText}>Comment</p>
                </div>
            </div>
        </div>
    )
}

const styles = {
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