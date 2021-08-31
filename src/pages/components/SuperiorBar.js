import Arrow from '../imgs/arrow.svg';
import SearchImage from '../imgs/search.svg';
import history from '../../history'

export default function superiorBar(props) {

    const PageName = props.PageName;
    const ReturnButton = props.ReturnButton;
    const SearchButton = props.SearchButton;
    const ReturnURL = props.ReturnURL;

    

    function redirect() {
        history.push(ReturnURL);
    }

    function goSearchPage() {
        history.push('/search');
    }

    function Return() {
        if(ReturnButton == "True"){
            return (
                <div style={styles.superiorButton}>
                    <button onClick={redirect} style={styles.returnButton}>
                        <img src={Arrow} alt="Return Button" width="12" height="24"/>
                    </button>
                </div>
            )
        } else {
            return <div></div>
        }
    }
    function Search() {
        if(SearchButton == "True"){
            return (
                <div>
                    <button onClick={goSearchPage} style={styles.searchButton}>
                            <img src={SearchImage}  alt="search button" width="18" height="18"/>
                    </button>
                </div>
            )
        } else {
            return <div></div>
        }
    }
    
    return (
        <div className="superiorBar" style={styles.superiorBar}>
            
            <Return />

            <div style={styles.superiorP}>
                <p style={styles.p}>{PageName}</p>
            </div>
            
            <Search />
        </div>
    )
}


const styles = {
    superiorBar:{
        width:"100%",
        height:'88px',
        backgroundColor:'#00BFA5',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"flex-end",
    },
    superiorButton:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:"baseline",
        margin:"10px 20px",
    },
    returnButton:{
        cursor:"pointer",
        backgroundColor:"#00BFA5",
    },
    superiorP:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"baseline",
        margin:"10px",
        fontSize:"17px",
        fontWeight:"900"
    },
    searchButton:{
        margin:"10px",
        backgroundColor:"#00BFA5"
    }
}
