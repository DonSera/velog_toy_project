import {useHistory} from "react-router-dom";

function Post() {
    const history = useHistory();

    function goHome() {
        history.push('/')
    }

    return (
        <div className="Post">
            <button type={"button"} onClick={goHome}>Home</button>
            <div>Post</div>
        </div>
    );
}

export default Post;