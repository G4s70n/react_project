import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/filters-sorts" activeClassName="selected">
              Filters y Sorts
            </NavLink>
          </li>
          <li>
            <NavLink to="/Paginado/page/" activeClassName="selected">
              Pagination
            </NavLink>
          </li>
          <li>
            <NavLink to="/infinite-scroll" activeClassName="selected">
              Infinite Scroll
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default NavBar;