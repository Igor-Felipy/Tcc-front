// eslint-disable-next-line
import React, {useEffect, useState} from 'react';

import Post from '../components/Post';
import SuperiorBar from '../components/SuperiorBar';
import TotalWrapper from '../components/TotalWrapper';

import api from "../../services/api";

class Feed extends React.Component {
    state = {
        felling:"all"
    }

    getPositivePosts = async e => {
        const response = await api.post("/happy");
        if(response === []){
            console.log("vazio")
        }
        return(
            response.map( (post) => <Post profilePic={post.profile_image} postImage={post.image} id={post.id} caption={post.caption} date={post.date} user_id={post.user_id}/>)
        );
    }
    getNeutralPosts = async e => {
        const response = await api.post("/neutral");
        return(
            response.map( (post) => <Post profilePic={post.profile_image} postImage={post.image} id={post.id} caption={post.caption} date={post.date} user_id={post.user_id}/>)
        );
    }
    getSadPosts = async e => {
        const response = await api.post("/sad");
        return(
            response.map( (post) => <Post profilePic={post.profile_image} postImage={post.image} id={post.id} caption={post.caption} date={post.date} user_id={post.user_id}/>)
        );
    }
    getAllPosts = async e => {
        const response = await api.post("/feedAll");
        return(
            response.map( (post) => <Post profilePic={post.profile_image} postImage={post.image} id={post.id} caption={post.caption} date={post.date} user_id={post.user_id}/>)
        );
    }

    getDecision = () => {
        if(this.state.felling === "happy"){
            this.getPositivePosts()
        } else if(this.state.felling === "sad") {
            this.getSadPosts()
        } else if(this.state.felling === "neutral") {
            this.getNeutralPosts()
        } else if(this.state.felling === "all") {
            this.getAllPosts()
        } else {
            return <h1>ERRO!</h1>
        }
    }

    render() {
        return (
            <TotalWrapper>
                <SuperiorBar PageName="Feed" ReturnButton="" SearchButton="" ReturnURL="" />
                <div> 
                <Post name="igor" profilePic="https://avatars.githubusercontent.com/u/58493694?v=4" postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgZNrdbNyF6vSjlCgk9pEf85ENk5TayFT0A&usqp=CAU" id="1" caption="windows" date="16/11/2021" user_id="1"/>
                <Post profilePic="https://images.unsplash.com/photo-1541747277704-ef7fb8e1a31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" postImage="https://images.unsplash.com/photo-1611518797909-82d38534ac03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" id="1" caption="" date="16/11/2021" user_id="1" name="Alexsandro"/>

<Post profilePic="http://academiatiosam.com/wp-content/uploads/2015/11/Pesquisa-revela-que-pessoas-mais-velhas-tem-%E2%80%9Cidade-fitness%E2%80%9D-de-jovens.png" postImage="https://www.criatives.com.br/wp-content/uploads/2017/02/food-porn-burgers-burgers-to-drool-over-690x669.png" id="1" caption="Dia do Lixo Guys" date="16/11/2021" user_id="1" name="João José"/>

<Post profilePic="http://academiatiosam.com/wp-content/uploads/2015/11/Pesquisa-revela-que-pessoas-mais-velhas-tem-%E2%80%9Cidade-fitness%E2%80%9D-de-jovens.png" postImage="https://soupetropolis.com/wp-content/uploads/2020/04/WhatsApp-Image-2020-05-18-at-11.19.21.jpeg" id="1" caption="Preparando o almoço da semana! TOP #LIFEISGOOD #COMIDASAUDAVEL" date="16/11/2021" user_id="1" name="João José"/>

<Post profilePic="https://guiaviajarmelhor.com.br/wp-content/uploads/2021/05/Praias-mexico-1.jpeg" postImage="https://s2.glbimg.com/Qgl26Ze8x7iJ1HoFwwRkwfjgGrM=/smart/e.glbimg.com/og/ed/f/original/2020/11/05/brasil-tem-duas-praias-entre-as-cinco-melhores-do-mundo.jpg" id="1" caption="" date="16/05/2021" user_id="1" name="Gabriel"/>

<Post profilePic="https://pbs.twimg.com/profile_images/1253409729436516352/LYccETBS_400x400.jpg" postImage="https://i.pinimg.com/originals/13/c8/3c/13c83c039880443152bfc07ecea8bf75.png" id="1" caption="finalmente entendi pq o light feis oq feis #lifehard" date="16/11/2021" user_id="1" name="Guizin sadboy das Trevas" />

<Post profilePic="https://blog.arbolez.com/wp-content/uploads/2018/09/gatinhos-fofos.jpg" postImage="https://super.abril.com.br/wp-content/uploads/2016/11/gatinhos-filhotes-reconhecem-a-voz-da-prc3b3pria-mc3a3e.jpg?quality=70&strip=all" id="1" caption="" date="07/11/2021" user_id="1" name="Pedro"/>

<Post profilePic="http://academiatiosam.com/wp-content/uploads/2015/11/Pesquisa-revela-que-pessoas-mais-velhas-tem-%E2%80%9Cidade-fitness%E2%80%9D-de-jovens.png" postImage="https://diaonline.ig.com.br/wp-content/uploads/2018/11/14-lugares-para-voce-saborear-a-melhor-comida-saudavel-em-goiania-1024x679.jpeg" id="1" caption="Hoje exagerei na porção #PersonalTrainerPira" date="16/11/2021" user_id="1" name="João José"/>

<Post profilePic="https://images.unsplash.com/photo-1521171338749-b3a9f9ad7f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" postImage="https://images.unsplash.com/photo-1527954513726-611b208be16a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80" id="1" caption="" date="08/09/2021" user_id="1" name="Jerson"/>

<Post profilePic="https://blog.arbolez.com/wp-content/uploads/2018/09/gatinhos-fofos.jpg" postImage="https://uploads.metropoles.com/wp-content/uploads/2020/04/02162331/JAC_0983-1-600x397.jpg" id="1" caption="" date="10/10/2021" user_id="1" name="Pedro"/>

<Post profilePic="http://academiatiosam.com/wp-content/uploads/2015/11/Pesquisa-revela-que-pessoas-mais-velhas-tem-%E2%80%9Cidade-fitness%E2%80%9D-de-jovens.png" postImage="https://reportergourmet.com.br/wp-content/uploads/2016/04/img_3337.jpg" id="1" caption="Voltando a rotina!" date="16/11/2021" user_id="1" name="João José"/>

<Post profilePic="https://images.unsplash.com/photo-1541747277704-ef7fb8e1a31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" postImage="https://images.unsplash.com/photo-1532205940-13602a5a0df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80" id="1" caption="" date="15/10/2021" user_id="1" name="Alexsandro"/>

<Post profilePic="https://guiaviajarmelhor.com.br/wp-content/uploads/2021/05/Praias-mexico-1.jpeg" postImage="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/litoral-sp-praias.jpg" id="1" caption="" date="10/09/2021" user_id="1" name="Gabriel"/>

<Post profilePic="https://pbs.twimg.com/profile_images/1253409729436516352/LYccETBS_400x400.jpg" postImage="https://pbs.twimg.com/media/D5g8dJSWAAEMDmB.jpg" id="1" caption="Todoroki ta massa vei!" date="16/11/2021" user_id="1" name="Guizin sadboy das Trevas" />

<Post profilePic="https://images.unsplash.com/photo-1541747277704-ef7fb8e1a31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" postImage="https://images.unsplash.com/photo-1509047292-e2e5905e4766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" id="1" caption="" date="10/08/2021" user_id="1" name="Alexsandro"/>

<Post profilePic="https://blog.arbolez.com/wp-content/uploads/2018/09/gatinhos-fofos.jpg" postImage="https://image.cachorrogato.com.br/textimages/jogos-com-gatinhos.jpg" id="1" caption="" date="08/10/2021" user_id="1" name="Pedro"/>

<Post profilePic="https://images.unsplash.com/photo-1521171338749-b3a9f9ad7f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" postImage="https://images.unsplash.com/photo-1524959725226-f4deb958e979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" id="1" caption="" date="09/04/2021" user_id="1" name="Jerson"/>

<Post profilePic="https://guiaviajarmelhor.com.br/wp-content/uploads/2021/05/Praias-mexico-1.jpeg" postImage="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-brasil.jpg" id="1" caption="" date="16/10/2021" user_id="1" name="Gabriel"/>

<Post profilePic="https://images.unsplash.com/photo-1541747277704-ef7fb8e1a31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" postImage="https://images.unsplash.com/photo-1584345959189-e4f251104c06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" id="1" caption="" date="09/04/2021" user_id="1" name="Alexsandro"/>

<Post profilePic="https://pbs.twimg.com/profile_images/1253409729436516352/LYccETBS_400x400.jpg" postImage="http://pm1.narvii.com/6554/085b372cc33a861099f5c5e586a010a9d1f31f8a_00.jpg" id="1" caption="me recomendaram pra assistir, é boum?" date="16/11/2021" user_id="1" name="Guizin sadboy das Trevas" />

<Post profilePic="https://images.unsplash.com/photo-1521171338749-b3a9f9ad7f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" postImage="https://images.unsplash.com/photo-1508692067718-6dc96c7e7c9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80" id="1" caption="" date="11/08/2021" user_id="1" name="Jerson"/>

<Post profilePic="https://blog.arbolez.com/wp-content/uploads/2018/09/gatinhos-fofos.jpg" postImage="https://s.zst.com.br/cms-assets/2020/12/melhor-brinquedo-para-gatinho-2-.png" id="1" caption="" date="07/08/2021" user_id="1" name="Pedro"/>

<Post profilePic="https://images.unsplash.com/photo-1541747277704-ef7fb8e1a31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" postImage="https://images.unsplash.com/photo-1600793575654-910699b5e4d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80" id="1" caption="" date="08/09/2021" user_id="1" name="Alexsandro"/>

<Post profilePic="https://pbs.twimg.com/profile_images/1253409729436516352/LYccETBS_400x400.jpg" postImage="https://cdn.falauniversidades.com.br/wp-content/uploads/2021/03/24175825/animes.png" id="1" caption="so alguns animes qi eu curto pa vcs" date="16/11/2021" user_id="1" name="Guizin sadboy das Trevas" />

<Post profilePic="https://images.unsplash.com/photo-1521171338749-b3a9f9ad7f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" postImage="https://images.unsplash.com/photo-1521900845716-b9c9241ec002?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" id="1" caption="" date="16/11/2021" user_id="1" name="Jerson"/>

<Post profilePic="http://academiatiosam.com/wp-content/uploads/2015/11/Pesquisa-revela-que-pessoas-mais-velhas-tem-%E2%80%9Cidade-fitness%E2%80%9D-de-jovens.png" postImage="https://www.sabornamesa.com.br/media/k2/items/cache/7b0257640dc77a55cf753ae766e7db69_XL.jpg" id="1" caption="Jantinha na casa da Mãe" date="16/11/2021" user_id="1" name="João José"/>

<Post profilePic="https://guiaviajarmelhor.com.br/wp-content/uploads/2021/05/Praias-mexico-1.jpeg" postImage="https://a.cdn-hotels.com/gdcs/production184/d1098/f738af60-a4a3-4375-9ed6-d6b8d4cf5601.jpg" id="1" caption="" date="24/07/2021" user_id="1" name="Gabriel"/>

<Post profilePic="https://images.unsplash.com/photo-1521171338749-b3a9f9ad7f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" postImage="https://images.unsplash.com/photo-1508676794597-f461263a660d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2576&q=80" id="1" caption="" date="15/10/2021" user_id="1" name="Jerson"/>

<Post profilePic="https://guiaviajarmelhor.com.br/wp-content/uploads/2021/05/Praias-mexico-1.jpeg" postImage="https://vemvoar.voeazul.com.br/wp-content/uploads/2021/01/praia-pipa3.jpg" id="1" caption="" date="22/09/2021" user_id="1" name="Gabriel"/>

<Post profilePic="https://blog.arbolez.com/wp-content/uploads/2018/09/gatinhos-fofos.jpg" postImage="https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg" id="1" caption="" date="01/07/2021" user_id="1" name="Pedro"/>

<Post profilePic="https://pbs.twimg.com/profile_images/1253409729436516352/LYccETBS_400x400.jpg" postImage="https://www.comboinfinito.com.br/principal/wp-content/uploads/2021/07/Fullmetal-manga.jpg" id="1" caption="MELHOR PERSONAGI DE TODUS US TEMPUS" date="16/11/2021" user_id="1" name="Guizin sadboy das Trevas" />
                
                </div>      
            </TotalWrapper>
        );
    }

}
export default Feed;