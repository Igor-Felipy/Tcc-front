const { default: axios } = require('axios');
const { Profiler } = require('react');

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
function post(){
    base.post('/feed',{
        'teste':'teste'
    })
}
function post_details(){
    base.post('/feed',{
        'teste':'teste'
    })
}

function profile(){
    base.post('/feed',{
        'teste':'teste'
    })
}
function feed() {
    base.post('/feed',{
        'teste':'teste'
    })
}