import SuperiorBar from './components/SuperiorBar';
import PostDetailsComments from './components/PostDetailsComments';
import PostDetailsPost from './components/PostDetailsPost';

export default function Post(){
    return (
        <div style={styles.total}>
            <SuperiorBar />
            <div className="content" style={styles.content}>
                <PostDetailsPost />
                <PostDetailsComments />
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
    content:{
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"row",
    }
}