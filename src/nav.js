import { Link } from "react-router-dom";
function Nav() {
 return (
   <nav className="nav nav-tabs mb-2">
     <Link className="nav-link" to="/home">
       Home</Link>
   </nav>
 );
}
export default Nav;