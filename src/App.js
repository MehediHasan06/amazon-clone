import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Header/>                                                                                     
      <Router>
        <Switch>

          <Route exact path="/shop">
            <Shop/>
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/inventory">
            <Inventory/>
          </Route>
          <Route exact path="/">
            <Shop/> 
          </Route>
          <Route exact path="/product/:productKey">
              <ProductDetails/>
          </Route>
          <Route exact path="*">
            <NotFound/>
          </Route>

        </Switch>
      </Router>      
    </div>
  );
}

export default App;
