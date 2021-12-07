import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Coffee from "./components/Coffee";
import Tea from "./components/Tea";
import NavBar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import UserState from "./context/UserState";
import Locations from "./components/Locations";

function App() {
  return (
    <>
      <UserState>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
		  <Route path="/dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />}>
            <Route path="tea" element={<Tea />} />
            <Route path="coffee" element={<Coffee />} />
            <Route path="*" element={<h3> product not found </h3>} />
          </Route>
          <Route path="*" element={<h3> page not found </h3>} />
          <Route path="locations" element={<Locations />} />
          <Route path="locations/:name" element={<Locations />} />
        </Routes>
      </UserState>
    </>
  );
}

export default App;
