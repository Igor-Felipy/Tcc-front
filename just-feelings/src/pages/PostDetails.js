export default function Post(){
    return (
        <div>
            <div className="post">
                <div className="post-content">
                    <div className="userData">
                        <img />
                        <div className="userDataContent">
                            <a>nome</a>
                            <p>data</p>
                        </div>
                    </div>
                    <div className="image">
                        <img/>
                    </div>
                    <div className="buttons">
                        <div className="leftButtons">
                            <button><img /></button>
                            <button><img /></button>
                        </div>
                        <div className="rightButtons">
                            <button><img /></button>
                        </div>
                    </div>
                </div>
                <div className="analitics">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div className="comments">
                <div className="comment">
                    <img />
                    <div className="CommentContent">
                        <a>Nome</a>
                        <p>Comment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
