import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Team from "./Team";
function NavBar(){



    return <>
    <div className="container">
    <div className="row">
    <div className="col-2" >
    <div id="mySidenav" className="sidenav" style={{width:"200px"}}>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
</div>
<div className="col-10" style={{paddingLeft:"0px",zIndex:"0"}}>
<Header></Header>
<Home></Home>
<About></About>
<Service></Service>
<Portfolio></Portfolio>
<Team></Team>
<Footer></Footer>

            </div>
        </div>
    </div>
    




    </>
}
export default NavBar;