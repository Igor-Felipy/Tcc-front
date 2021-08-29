import React, {useEffect, useState} from 'react';

import Post from './components/Post';
import SuperiorBar from './components/SuperiorBar';
import TotalWrapper from './components/TotalWrapper';

import api from '../api';
import { render } from '@testing-library/react';


class Feed extends React.Component {
    const [apiData, setApiData] = useState(null);
    useEffect(() => {
        const data = async function getData() {
            return await api.post('/feed');
        }
        if (data != null){
            setApiData(data);
        }
    },[]);

    render() {
        return (
            <TotalWrapper>
                <SuperiorBar />
                <div style={styles.content}>
                    <Post profilePic='' postImage='' />
                </div>      
            </TotalWrapper>
        );
    }

}

export default Feed;