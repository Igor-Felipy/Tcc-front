const { default: axios } = require('axios');

const base = axios.create({
    baseURL: 'http://localhost:3000'
})

function register(){
    base.post('/register',{
        'teste':'teste'
    })
}
function login(){
    base.post('/login',{
        'username':'teste',
        'password':'teste'
    }).then(function (response){
        //o response retorna ou uma confirmação de login ou uma falha de autenticação, então é necessario fazer um if para separar cada response e dai salvar o token
        sessionStorage.setItem('@just-feelings/token',response.token)
    })
}



export const isAuthenticated = () => true;