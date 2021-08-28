import SuperiorBar from './components/SuperiorBar';
import ProfileContent from './components/ProfileContent';
 
export default function Profile(){
    return(
        <div className="total" style={styles.total}>
            <SuperiorBar />
            <ProfileContent />
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
    }
}