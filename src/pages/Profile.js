import SuperiorBar from './components/SuperiorBar';
import ProfileContent from './components/ProfileContent';
import TotalWrapper from './components/TotalWrapper';
import React from 'react';
 
class Profile extends React.Component {
    render() {
        return(
            <TotalWrapper>
                <SuperiorBar />
                <ProfileContent />
            </TotalWrapper>
        )
    }
}

export default Profile;