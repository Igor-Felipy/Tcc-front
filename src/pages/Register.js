import SuperiorBar from './components/SuperiorBar';
import RegisterForm from './components/RegisterForm';

export default function Register() {
    return (
        <div style={StyleSheet.total}>
            <SuperiorBar />
            <RegisterForm />
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