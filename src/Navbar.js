import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
		     <span className="react-logo">
			   <span className="nucleo"></span>
		     </span>
       </div>
       <div className="title">
        <h1>React Blog</h1>
      </div>
      
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;