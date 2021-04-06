const { default: axios } = require('axios');
const Authenticated = false;

const base = axios.create({
    baseURL: 'http://localhost:5000'
})

function register(email,nickname,name,birth,password){
    base.post('/auth/register',{
        "email":email,
        "nickname":nickname,
        "name":name,
        "birth":birth,
        "password":password
    }).then((response) =>{
        if (error in response){
            return response.error;
        }else {
            return response
        }
    })
}

function login(email,password){
    base.post('/auth/login',{
        'email':email,
        'password':password
    }).then(function (response){
        if ('error' in response){
            
        } else {
            sessionStorage.removeItem('@just-feelings/token')
            sessionStorage.setItem('@just-feelings/token',response.token)
            Authenticated = true
        }
    })
}


export const isAuthenticated = () => Authenticated.valueOf();