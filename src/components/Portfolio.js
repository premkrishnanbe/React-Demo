import React from "react";

class Portfolio extends React.Component{

    render(){
        return <>
        
        <section id="portfolio">
                <div className="container text-center" style={{margin: "50px auto",paddingTop: "60px", paddingBottom:"0px"}}>
                    <div className="text-center"  >
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    <p>
                        <a className="poat title"onclick="All_View()" href="javascript:void(0)">ALL</a>
                        <a className="poat title" onclick="App_View()" href="javascript:void(0)">APP</a>
                        <a className="poat title" onclick="Card_View()" href="javascript:void(0)" >CARD</a>
                        <a className="poat title" onclick="Web_View()" href="javascript:void(0)" >WEB</a>
                    </p>  
                    </div>

                      <div id="All_1" className="row" >
                   
                    
                        <div  className="col-md-4">
                            <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/portfolio/portfolio-1.jpg" className="img-fluid gl"></img>
                            <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/portfolio/portfolio-6.jpg" className="img-fluid gl"></img>
                            
                            
                        </div>

                          <div className="col-md-4" >
                              <img   src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/portfolio/portfolio-2.jpg" className="img-fluid gl"></img>
                              <img   src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/portfolio/portfolio-5.jpg" className="img-fluid gl"></img>
                              <img   src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/portfolio/portfolio-9.jpg" className="img-fluid gl"></img>
                            
                            </div>

                        <div  className="col-md-4" >
                            <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/portfolio/portfolio-3.jpg" className="img-fluid gl"></img>
                            <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/portfolio/portfolio-4.jpg" className="img-fluid gl"></img>
                            <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/portfolio/portfolio-7.jpg" className="img-fluid gl"></img>
                            <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/portfolio/portfolio-8.jpg" className="img-fluid gl"></img>
                            
                            </div>
                            </div>
                      </div>

                </section>
        </>
    }
}

export default Portfolio;