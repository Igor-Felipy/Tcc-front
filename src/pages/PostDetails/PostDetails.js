import SuperiorBar from '../components/SuperiorBar';
import PostDetailsComments from '../components/PostDetailsComments';
import PostDetailsPost from '../components/PostDetailsPost';
import TotalWrapper from '../components/TotalWrapper';
import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <TotalWrapper>
                <SuperiorBar PageName="Details" ReturnButton="" SearchButton="" ReturnURL="/" />
                <div className="content" style={styles.content}>
                    <PostDetailsPost />
                    <PostDetailsComments />
                </div>
            </TotalWrapper>
        )
    }
}

const styles = {
    content:{
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"row",
    }
}

export default Post;