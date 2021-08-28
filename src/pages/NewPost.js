import SuperiorBar from './components/SuperiorBar';
import NewPostContent from './components/NewPostContent';
import TotalWrapper from './components/TotalWrapper';

export default function NewPost(){
    return(
        <TotalWrapper>
            <SuperiorBar />
            <NewPostContent />
        </TotalWrapper>
    );
}

