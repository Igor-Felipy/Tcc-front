import React from 'react';

import api from "../../services/api";

class ProfileContent extends React.Component {

    AllPots = async e => {
        try{
            const posts = await api.post("/post/profile", {"user_id":this.props.id});
            return(
                posts.map(
                    <button style={styles.postButton}>
                        <img src={posts.image} style={styles.imagePost}  alt={posts.caption}/>
                    </button>
                )
            )
        } catch (err) {
            return(
                <h1>{err}</h1>
            )
        }
    }

    render() {
        return (
            <div className="content" style={styles.content}>
                <div className="profileData" style={styles.profileData}>
                    <img src="https://pbs.twimg.com/profile_images/1253409729436516352/LYccETBS_400x400.jpg" style={styles.profileImage} alt="" />
                    <div style={styles.dataDiv}>
                        <h1 style={styles.profileName}>Guizin sadboy das Trevas</h1>
                        <p style={styles.profileCaption}>Apenas mais otaku latino americano</p>
                        <div style={styles.divNumbers}>
                            <div style={styles.separator}>
                                <p style={styles.number1}>5</p>
                                <p style={styles.number2}>Posts</p>
                            </div>                        
                            <div style={styles.separator}>
                                <p style={styles.number1}>4</p>
                                <p style={styles.number2}>Seguindo</p>
                            </div>
                            <div style={styles.separator}>
                                <p style={styles.number1}>2</p>
                                <p style={styles.number2}>Seguidores</p>
                            </div>
                        </div>
                        
                    </div>
                    <div style={styles.editFollow}>
                        <button style={styles.editFollowButton}>Follow</button>
                        <p style={styles.percentage}>5/10</p>
                    </div>
                </div>
    
                <div className="divPosts" style={styles.divPosts}>
                    <button style={styles.postButton}>
                        <img src="https://i.pinimg.com/originals/13/c8/3c/13c83c039880443152bfc07ecea8bf75.png" style={styles.imagePost}  alt={"finalmente entendi pq o light feis oq feis #lifehard"}/>
                    </button>
                    <button style={styles.postButton}>
                        <img src="https://pbs.twimg.com/media/D5g8dJSWAAEMDmB.jpg" style={styles.imagePost}  alt="Todoroki ta massa vei!"/>
                    </button>
                    <button style={styles.postButton}>
                        <img src="http://pm1.narvii.com/6554/085b372cc33a861099f5c5e586a010a9d1f31f8a_00.jpg" style={styles.imagePost}  alt="me recomendaram pra assistir, é boum?"/>
                    </button>
                    <button style={styles.postButton}>
                        <img src="https://cdn.falauniversidades.com.br/wp-content/uploads/2021/03/24175825/animes.png" style={styles.imagePost}  alt="so alguns animes qi eu curto pa vcs" date="16/11/2021" user_id="1" name="Guizin sadboy das Trevas"/>
                    </button>
                    <button style={styles.postButton}>
                        <img src="https://pbs.twimg.com/profile_images/1253409729436516352/LYccETBS_400x400.jpg" postImage="https://www.comboinfinito.com.br/principal/wp-content/uploads/2021/07/Fullmetal-manga.jpg" style={styles.imagePost}  alt="MELHOR PERSONAGI DE TODUS US TEMPUS"/>
                    </button>

                   
                </div> 
            </div>
        )    
    }
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

export default ProfileContent;