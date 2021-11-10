// eslint-disable-next-line
import React, {useEffect, useState} from 'react';

import Post from '../components/Post';
import SuperiorBar from '../components/SuperiorBar';
import TotalWrapper from '../components/TotalWrapper';

import api from "../../services/api";

class Feed extends React.Component {

    getPositivePosts = async e => {
        const response = await api.post("/happy");
        return(
            response.map(
                <Post profilePic={response.profile_image} postImage={response.image} id={response.id} caption={response.caption} date={response.date} user_id={response.user_id}/>
            )
        );
    }
    getNeutralPosts = async e => {
        const response = await api.post("/neutral");
        return(
            response.map(
                <Post profilePic={response.profile_image} postImage={response.image} id={response.id} caption={response.caption} date={response.date} user_id={response.user_id}/>

            )
        );
    }
    getSadPosts = async e => {
        const response = await api.post("/sad");
        return(
            response.map(
                <Post profilePic={response.profile_image} postImage={response.image} id={response.id} caption={response.caption} date={response.date} user_id={response.user_id}/>
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