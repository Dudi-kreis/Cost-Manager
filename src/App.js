import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Reports from "./Reports";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/reports">
                            <Reports/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;
