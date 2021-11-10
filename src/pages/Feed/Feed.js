import React, {useEffect, useState} from 'react';

import Post from '../components/Post';
import SuperiorBar from '../components/SuperiorBar';
import TotalWrapper from '../components/TotalWrapper';

import api from "../../services/api";

class Feed extends React.Component {
    constructor(props){
        super(props);
    };


    getPositivePosts = async e => {
        const response = await api.post("/happy");
        return(
            response.map(
                <Post profilePic={profile_image} postImage={image} id={id} caption={caption} date={date} user_id={user_id}/>
            )
        );
    }
    getNeutralPosts = async e => {
        const response = await api.post("/neutral");
        return(
            response.map(
                <Post profilePic={profile_image} postImage={image} id={id} caption={caption} date={date} user_id={user_id}/>
            )
        );
    }
    getSadPosts = async e => {
        const response = await api.post("/sad");
        return(
            response.map(
                <Post profilePic={profile_image} postImage={image} id={id} caption={caption} date={date} user_id={user_id}/>
            )
        );
    }

    render() {
        return (
            <TotalWrapper>
                <SuperiorBar PageName="Feed" ReturnButton="" SearchButton="" ReturnURL="" />
                <div> 
                    {this.getNeutralPosts()}
                </div>      
            </TotalWrapper>
        );
    }

}
export default Feed;