import React, { createContext, useState, useEffect } from 'react';

import api from '../api';
import history from '../history';

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token){
            
        }
    },[]);

    async function handleLogin() {
        const{ data: { token } } = await api.post('/authenticate');

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = "Bearer ${token}";
        setAuthenticated(true);
        history.push('/users');
    }

    return (
        <Context.Provider value={{ authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };
