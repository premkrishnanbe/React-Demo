import react from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Team from "./Team";

class WebLayout extends react.Component{


    render(){
        return <>
        <div style={{paddingLeft:"0px",zIndex:"0"}}>
<Header></Header>
<Home></Home>
<About></About>
<Service></Service>
<Portfolio></Portfolio>
<Team></Team>
<Footer></Footer>

            </div>
        </>
    }
}

export default WebLayout;