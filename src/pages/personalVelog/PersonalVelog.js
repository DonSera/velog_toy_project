import {useHistory} from "react-router-dom";

function PersonalVelog() {
    const history = useHistory();

    function goHome() {
        history.push('/')
    }

    return (
        <div className="PersonalVelog">
            <button type={"button"} onClick={goHome}>Home</button>
            <div>PersonalVelog</div>
        </div>
    );
}

export default PersonalVelog;