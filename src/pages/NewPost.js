import SuperiorBar from './components/SuperiorBar'
import NewPostContent from './components/NewPostContent';

export default function NewPost(){
    return(
        <div style={styles.total}>
            <SuperiorBar />
            <NewPostContent />
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
    }
}