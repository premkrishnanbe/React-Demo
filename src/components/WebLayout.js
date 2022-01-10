import react from "react";
import {Home,Header,About,Portfolio,Team,Footer,Service} from './Home'



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