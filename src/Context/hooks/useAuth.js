import { useState, useEffect } from 'react';

import api from '../../api';
import history from '../../history';

export default function useAuth() {
    const [authenticated, setAuthenticated ] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('justFeelings');
        if (token != null){
            api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true)
        }

        setLoading(false);
    },[]);

    async function handleLogin(email, pass) {
        const data = await api.post('/auth/login', {
            "email":email,
            "password":pass
        });
        
        if ("error" in data) {
            localStorage.removeItem('justFeelings')
            history.push('/register');
        } else {
            const token = data.token;
            localStorage.setItem('justFeelings', JSON.stringify(token));
            api.defaults.headers.authorization = `Bearer ${token}`;
            setAuthenticated(true);
            history.push('/');
        }
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('justFeelings');
        api.defaults.headers.authorization = undefined;
        history.push('/login');
    }

    return { authenticated, loading, handleLogin, handleLogout}

}