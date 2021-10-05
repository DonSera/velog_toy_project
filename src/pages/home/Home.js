import {useHistory} from "react-router-dom";
import LoginButton from "../../component/loginButton/LoginButton";
import {useState} from "react";
import LoginPopup from "../../component/loginPopup/LoginPopup";

function Home() {
    const history = useHistory();
    const [popup, setPopup] = useState(false);

    function handleClick(str) {
        history.push(`/${str}`);
    }

    function popupClick(bool) {
        setPopup(bool);
    }

    return (
        <div className="Home">
            <LoginButton openPopup={popupClick}/>
            <div>Home</div>
            <button type={"button"} onClick={() => handleClick(`personal_velog`)}>personal_velog</button>
            <button type={"button"} onClick={() => handleClick(`post`)}>post</button>
            {popup && <LoginPopup closePopup={popupClick}/>}
        </div>
    );
}

export default Home;