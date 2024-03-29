import Heart from '../imgs/heart.svg';
import Comments from '../imgs/comments.svg';
import Share from '../imgs/share.svg';
import React from 'react';

import { Link } from "react-router-dom";

function Post(props) {
    const profilePic = props.profilePic;
    const postImage = props.postImage;
    const postName = props.name;
    const postdate = props.date;
    // eslint-disable-next-line
    const postcaption = props.caption;
    return(
        <div style={styles.post}>
            <div className="post-superior" style={styles.postSuperior}>
                <img src={profilePic} alt="" style={styles.postProfilePic}/>
                <div className="post-superior-data" style={styles.postSuperiorData}>
                    <h2 style={styles.postProfileName}><Link to="/profile" style={styles.link}>{postName}</Link></h2>
                    <p style={styles.postProfileData}>{postdate}</p>
                </div>    
            </div>    

            <div className="post-image" style={styles.postImageDiv}>
                <img src={postImage} alt="" style={styles.postImage}/>
            </div>
            
            <div className="post-bottom" style={styles.postBottoms}>
                <div className="post-bottom-left" style={styles.postBottomLeft}>
                    <button style={styles.postBottomIcons}><img src={Heart} alt="" /></button>
                    <button style={styles.postBottomIcons}><img src={Comments} alt="" /></button>
                </div>
                <div className="post-bottom-right" style={styles.postBottomRight}>
                    <button style={styles.postBottomIcons}><img src={Share} alt=""/></button>
                </div>
            </div>
        </div>
    )
}

const styles = {
    post:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        marginBottom:"30px"
    },
    postSuperior:{
        display:"flex",
        flexDirection:"row",
        marginTop:"10px"
    },
    postProfilePic:{
        width:"37px",
        height:"37px",
        borderRadius:"100%",
        marginRight:"10px"
    },
    postProfileName:{
        fontWeight:"bold",
        fontSize:"13px",
        color:"#151522"
    },
    link:{
        textDecoration:"none",
        fontWeight:"bold",
        fontSize:"13px",
        color:"#151522"
    },
    postProfileData:{
        fontWeight: "500",
        fontSize:"12px",
        color:"#999999"
    },
    postImageDiv:{
        marginTop:"10px"
    },
    postImage:{
        width:"300px",
        height:"auto",
        borderRadius:"10px"
    },
    postBottoms:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",

    },
    postBottomIcons:{
        margin:"10px",
        backgroundColor:"#FFF"
    },
}



export default Post;