import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header=()=>{
  const {isLoggedIn}=useAuth();
  return(
    <header style={{padding:'1rem',backgroundColor:'lightblue',color:'black'}}>
      <h1>Eco-Track</h1>
      <p>Carborn Footprint Tracker</p>
      <nav>
        <Link to="/" style={{color:"black"}}>Dashboard</Link>{" | "}
        <Link to="/logs" style={{color:"black"}}>Logs</Link>{" | "}
        <Link to="/login" style={{color:"black"}}>Login</Link>{" | "}
        <Link to="/logout" style={{color:"black"}}>Logout</Link>
      </nav>
    </header>
  )
}
export default Header;