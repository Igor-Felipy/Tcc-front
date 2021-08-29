import SuperiorBar from './components/SuperiorBar';
import NewPostContent from './components/NewPostContent';
import TotalWrapper from './components/TotalWrapper';
import React from 'react';

class NewPost extends React.Component{
    render() {
        return(
            <TotalWrapper>
                <SuperiorBar />
                <NewPostContent />
            </TotalWrapper>
        );
    }
}

export default NewPost;