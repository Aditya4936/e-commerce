import React from 'react'
import Announce from '../Componments/Announce';
import Navbar from '../Componments/Navbar';
import Slider from '../Componments/Slider';
import Categories from '../Componments/Categories';
import Products from '../Componments/Products';
import Newsletter from '../Componments/Newsletter';
import Footer from '../Componments/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Home() {
  return (
    <Router>
      <div>
        <Switch>
          <Route>
        <Navbar />
        </Route>
        </Switch>
        <Announce />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
        
    </div >
    </Router>
  )
}

export default Home;