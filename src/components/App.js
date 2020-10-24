import Navbar from "./reusables/Navbar";
import Home from './routes/Home/Home'
import Plants from './routes/Plants/Plants'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./styles.sass";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/pflanzen" exact><Plants/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
