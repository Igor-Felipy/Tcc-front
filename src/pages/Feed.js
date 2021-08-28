import React, {useEffect, useState} from 'react';

import Post from './components/Post';
import SuperiorBar from './components/SuperiorBar';

import api from '../api';


export default function Feed() {
    const [apiData, setApiData] = useState(null);
    useEffect(() => {
        const data = async function getData() {
            return await api.post('/feed');
        }
        if (data != null){
            setApiData(data);
        }
    },[]);

    return (
        <div style={styles.total}>
            <SuperiorBar />
            <div style={styles.content}>
                <Post profilePic='' postImage='' />
            </div>      
        </div>
    );

}

const styles = {
    total:{
        display:'flex',
        flex:'1',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
    }
}