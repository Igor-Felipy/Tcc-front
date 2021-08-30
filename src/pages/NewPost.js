import SuperiorBar from './components/SuperiorBar';
import NewPostContent from './components/NewPostContent';
import TotalWrapper from './components/TotalWrapper';
import React from 'react';

class NewPost extends React.Component{
    render() {
        return(
            <TotalWrapper>
                <SuperiorBar PageName="New Post" ReturnButton="True" SearchButton="True" ReturnURL="/" />
                <NewPostContent />
            </TotalWrapper>
        );
    }
}

export default NewPost;