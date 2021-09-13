import styled  from "styled-components";

export default function NewPostContent() {
    return (
        <ContentWrapper>
            <DivCaption>
                <img src="https://source.unsplash.com/random/64x64" alt="" />
                <input type="text" placeholder="Compartilhe seu Feeling!" />
            </DivCaption>
            <div style={styles.divImage}>
                <input type="file" style={styles.inputFile}/>
                <button style={styles.button}>Feeling!</button>
            </div>
        </ContentWrapper>
    )
}

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;
`;
const DivCaption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: Center
    margin: 20px;
    margin-top: 30px;
    img {
        width: 48px;
        height: 48px;
        border-radius: 100%;
        margin-right: 40px;
    };
    input {
        fontSize: 19px;
        color: #828282;
        padding: 10px
    }
`;
const DivImage = styled.div`
    margin-top:20px;
    input {
        padding: 15px 10px;
        width: 200px;
        background-color: #00BFA5;
        color: #FFF;
        text-transform: uppercase;
        text-align: center;
        margin-top: 10px;
        cursor: pointer;
        border-radius: 5px;
        margin-right: 40px;
    };
    button {
        background-color: 00BFA5;
        border-radius: 5px;
        width: 130px;
        height: 50px;
        color: #FFF;
        fontWeight: 300;
        fontSize: 16px;
    }
`;