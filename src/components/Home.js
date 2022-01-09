import React from "react";

function Home() {

   
        return <>
        <section style={{margin:"7rem 0"}}  className="d-flex justify-content-center align-top homebg" >
            <div className="container position-relative ">
              <div className="row justify-content-center text-info">
                <div className="col-xl-7 col-lg-9 text-center " style={{paddingTop: "50px"}}>
                  <h1>One Page Bootstrap</h1><h1> Website Template</h1>
                  <h3 className="text-secondary">We are team of talented designers</h3>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary " style={{marginTop: "20px;"}}>
                    <a href="#about"  className="btn text-white">Get Started</a></button>
              </div>
              </div>
            </section>
            
            
            <section>
                <div className="container-fluid text-center "  style={{padding:"0 60px"}}>
                <div className="row" >
                    <div id="trans_zoom" className="col img-fluid bg-light rounded ab1">
                        <img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-5-settings@2x.png" width="35px" height="35px"></img>
                        
                        <h4 style={{padding: "3px 0 3px 0"}}className="title"><a className="anc_hover" href="">Lorem Ipsum</a></h4>
                        
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>
                    <div id="trans_zoom" className="col img-fluid bg-light rounded ab1"> 
                        <img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-5-settings@2x.png" width="35px" height="35px"></img>
                        <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                    <div id="trans_zoom" className="col img-fluid bg-light rounded ab1"> 
                        <img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-5-settings@2x.png" width="35px" height="35px"></img>
                        <h4 className="title"><a href="">Magni Dolores</a></h4>
                        <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                    <div id="trans_zoom" className="col img-fluid bg-light rounded  ab1">
                        <img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-5-settings@2x.png" width="35px" height="35px"></img>
                        <h4 className="title"><a href="">Nemo Enim</a></h4>
                        <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p> 
                    </div>
                </div>
                </div>
            </section>






            
        </>
    }

export default Home;