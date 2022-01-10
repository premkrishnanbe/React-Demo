import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Team from "./Team";
import { BrowserRouter as Router, Route,Link,NavLink,Switch } from 'react-router-dom';
function NavBar(){



    return <>
    

    <div id="mySidenav" className="sidenav" style={{width:"200px"}}>
  <a href="/home">Home</a>
  <a href="/cowin" style={{fontSize:"20px"}}>Cowin Api Class Comp.</a>
  <a href="/cowinfn" style={{fontSize:"20px"}}>Functional Comp.</a>
  <a href="/read" style={{fontSize:"20px"}}>Card View(Emp List DB)</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
  <a href="*">temp</a>
  <a href="*" style={{position:"absolute",bottom:"5px",fontSize:"20px"}}>Invalid Url</a>

</div>

    




    </>
}
export default NavBar;