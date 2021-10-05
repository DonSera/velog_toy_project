import {useHistory} from "react-router-dom";

function Home() {
    const history = useHistory();

    function handleClick(str) {
        history.push(`/${str}`);
    }

    return (
        <div className="Home">
            <div>Home</div>
            <button type={"button"} onClick={() => handleClick(`personal_velog`)}>personal_velog</button>
            <button type={"button"} onClick={() => handleClick(`post`)}>post</button>
        </div>
    );
}

export default Home;