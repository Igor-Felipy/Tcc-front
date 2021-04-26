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
                    <div style={styles.superiorP}><p style={styles.p}>Registrar</p></div>
                    <div>
                        <button onClick={redirect} style={styles.searchButton}>
                                <img src={Search}  alt="search button" width="18" height="18"/>
                        </button>
                    </div>
            </div>
            <div className="content" style={styles.content}>
                <div className="post" style={styles.post}>
                    <div className="post-superior" style={styles.postSuperior}>
                        <img src="https://source.unsplash.com/random/64x64" alt=""/>
                        <div className="post-superior-data" style={styles.postSuperiorData}>
                            <h2>Username</h2>
                            <p>post data</p>
                        </div>    
                        <div className="post-image" style={styles.postImage}>
                            <img src="https://source.unsplash.com/random/800x600" alt=""/>
                        </div>
                        <div className="post-bottom">
                            <div className="post-bottom-left" style={styles.postBottomLeft}>
                                <button><img src={Heart} alt="" style={styles.postBottomHeart}/></button>
                                <button><img src={Comments} alt=""/></button>
                            </div>
                            <div className="post-bottom-right" style={styles.postBottomRight}>
                                <button><img src={Share} alt=""/></button>
                            </div>
                        </div>
                    </div>    
                    <hr/>
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
        backgroudColor:"#00BFA5"
    },
}