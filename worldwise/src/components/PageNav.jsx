import { NavLink } from "react-router-dom";
import "./PageNav.modules.css";
import Logo from "../components/Logo";
const PageNav = () => {
  return (
    <nav className="nav">
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="ctaLink">
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
