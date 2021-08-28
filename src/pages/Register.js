import SuperiorBar from './components/SuperiorBar';
import RegisterForm from './components/RegisterForm';
import TotalWrapper from './components/TotalWrapper';

export default function Register() {
    return (
        <TotalWrapper>
            <SuperiorBar />
            <RegisterForm />
        </TotalWrapper>
    )
}