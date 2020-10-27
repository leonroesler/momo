import Navbar from "./reusables/Navbar";
import Home from "./routes/home/Home";
import Plants from "./routes/plants/Plants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import "./styles.sass";

function App() {
  return (
    <Router>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/pflanzen" exact>
            <Plants />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </CartContextProvider>
    </Router>
  );
}

export default App;
