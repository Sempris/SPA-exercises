import React, { useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";

function NavBar() {
  const { state, loadUser, logout } = useContext(UserContext);

  useEffect(() => {
    loadUser();
  }, []);

  const guestLinks = (
    <>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
      <li>
        <NavLink to="/">Register</NavLink>
      </li>
    </>
  );

  const userLinks = (
    <>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={logout}>
          Log Out
        </NavLink>
      </li>
    </>
  );

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="products">Products</NavLink>
      </li>
      <li>
        <NavLink to="locations/berlin">Berlin</NavLink>
      </li>
      <li>
        <NavLink to="locations/hamburg">Hamburg</NavLink>
      </li>
      {!state.isAuthenticated ? guestLinks : userLinks}
    </ul>
  );
}

export default NavBar;
