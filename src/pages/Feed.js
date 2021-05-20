import history from '../history'

import Heart from './imgs/heart.svg';
import Comments from './imgs/comments.svg';
import Share from './imgs/share.svg';
import Arrow from './imgs/arrow.svg';
import Search from './imgs/search.svg';

export default function Feed() {
    function redirect() {
        history.push('/login');
    }
    return (
        <div className="total" style={styles.total}>
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
            <div className="content" style={styles.content}>
                <div className="post" style={styles.post}>
                    <div className="post-superior" style={styles.postSuperior}>
                        <img src="https://source.unsplash.com/random/64x64" alt="" style={styles.postProfilePic}/>
                        <div className="post-superior-data" style={styles.postSuperiorData}>
                            <h2 style={styles.postProfileName}>Username</h2>
                            <p style={styles.postProfileData}>post data</p>
                        </div>    
                    </div>    
                        <div className="post-image" style={styles.postImageDiv}>
                            <img src="https://source.unsplash.com/random/800x600" alt="" style={styles.postImage}/>
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
                    <div style={styles.riscoFinal}></div>
                </div>  
                <div className="post" style={styles.post}>
                    <div className="post-superior" style={styles.postSuperior}>
                        <img src="https://source.unsplash.com/random/64x64" alt="" style={styles.postProfilePic}/>
                        <div className="post-superior-data" style={styles.postSuperiorData}>
                            <h2 style={styles.postProfileName}>Username</h2>
                            <p style={styles.postProfileData}>post data</p>
                        </div>    
                    </div>    
                        <div className="post-image" style={styles.postImageDiv}>
                            <img src="https://source.unsplash.com/random/800x600" alt="" style={styles.postImage}/>
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
                    <div style={styles.riscoFinal}></div>
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