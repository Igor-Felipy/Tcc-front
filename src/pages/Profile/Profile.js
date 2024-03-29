import SuperiorBar from '../components/SuperiorBar';
import ProfileContent from '../components/ProfileContent';
import TotalWrapper from '../components/TotalWrapper';
import React from 'react';
 
class Profile extends React.Component {
    render() {
        return(
            <TotalWrapper>
                <SuperiorBar PageName="Profile" ReturnButton="True" SearchButton="" ReturnURL="/" />
                <ProfileContent id={this.props.id} />
            </TotalWrapper>
        )
    }
}

export default Profile;