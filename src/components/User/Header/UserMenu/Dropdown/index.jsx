import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ dropdown }) => (
  <div className={dropdown}>
    <NavLink to="/account">Account</NavLink>
    <NavLink to="/order-history">Order History</NavLink>
    <NavLink to="/meal-planner">MealPlanner</NavLink>
    <button type="button">Logout</button>
  </div>
);

export default Dropdown;
