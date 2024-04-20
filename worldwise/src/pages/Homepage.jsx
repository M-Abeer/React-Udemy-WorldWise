import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";
import { NavLink } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <PageNav />
      <AppNav />
      <NavLink to="/app">Go to the app</NavLink>
    </div>
  );
};

export default Homepage;
