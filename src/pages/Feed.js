import React, {useEffect, useState} from 'react';

import Post from './components/Post';
import SuperiorBar from './components/SuperiorBar';
import TotalWrapper from './components/TotalWrapper';



class Feed extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TotalWrapper>
                <SuperiorBar PageName="Feed" ReturnButton="" SearchButton="" ReturnURL="" />
                <div style={styles.content}> 
                    <Post profilePic='https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' postImage='https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' />
                </div>      
            </TotalWrapper>
        );
    }

}
const styles = {
    content:{
        
    }
}
export default Feed;