import SuperiorBar from './components/SuperiorBar';
import ProfileContent from './components/ProfileContent';
import TotalWrapper from './components/TotalWrapper';
 
export default function Profile(){
    return(
        <TotalWrapper>
            <SuperiorBar />
            <ProfileContent />
        </TotalWrapper>
    )
}
