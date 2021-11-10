import React, {useEffect, useState} from 'react';

import Post from '../components/Post';
import SuperiorBar from '../components/SuperiorBar';
import TotalWrapper from '../components/TotalWrapper';

import api from "../../services/api";

class NotFound extends React.Component {
    render() {
        return (
            <TotalWrapper>
                <SuperiorBar PageName="" ReturnButton="" SearchButton="" ReturnURL="" />
                <h1>Page Not Found!</h1>
            </TotalWrapper>
        );
    }

}
export default NotFound;