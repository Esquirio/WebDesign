import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import NavBar from './components/NavBar';
import ItemDetails from './components/itemDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/shop" component={Shop} />
                    <Route path="/shop/:id" component={ItemDetails} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
