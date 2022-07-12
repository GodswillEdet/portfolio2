import { NavLink } from "react-router-dom";

const Sidenav = () => {
    return ( 
        <section className="sidenav">
            <NavLink to={`/`}></NavLink>
            <NavLink to={`/skills`}></NavLink>
            <NavLink to={`/about`}></NavLink>
            <NavLink to={`/resume`}></NavLink>
            <NavLink to={`/contact`}></NavLink>
            <NavLink to={`/project`}></NavLink>
        </section>
     );
}
 
export default Sidenav;