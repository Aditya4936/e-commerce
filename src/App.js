import Home from "./Pages/Home";
// import CategoryPage from "./Pages/CategoryPage";
// import CartPage from "./Pages/CartPage";
// import LoginPage from "./Pages/LoginPage";
// import ProductPage from "./Pages/ProductPage";
// import RegisterPage from "./Pages/RegisterPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Home />
          {/* <CategoryPage/> */}
          {/* <ProductPage/> */}
          {/* <CartPage/> */}
          {/* <LoginPage/> */}
          {/* <RegisterPage/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
