const { default: axios } = require('axios');

const base = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'authorization':sessionStorage.getItem('@just-feelings/token')
    }
})

function new_post(){
    base.post('/feed',{
        'teste':'teste'
    })
}