import './App.css';
import Home from "./pages/home/Home";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PersonalVelog from "./pages/personalVelog/PersonalVelog";
import Post from "./pages/post/Post";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={`/`} component={Home}/>
                    <Route path={`/personal_velog`} component={PersonalVelog}/>
                    <Route path={`/post`} component={Post}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
