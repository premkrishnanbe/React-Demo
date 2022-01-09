import React from "react";

class Footer extends React.Component{

    render(){
        return <>
        
        <section >
                <div className="container" style={{padding: "50px 0px"}}>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-xs footer-contact" >
                            <h3>OnePage</h3>
                            <p>
                              A108 Adam Street <br></br>
                              New York, NY 535022<br></br>
                              United States <br></br>
                              <strong>Phone:</strong> +1 5589 55488 55<br></br>
                              <strong>Email:</strong> info@example.com<br></br>
                            </p>
                          </div>
                
                          <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                           
                              <li><span className="iconify" data-icon="bx-bx-chevron-right" data-inline="false"></span> <a href="#">Home</a></li>
                              <li><span className="iconify" data-icon="bx-bx-chevron-right" data-inline="false"></span> <a href="#">About us</a></li>
                              <li><span className="iconify" data-icon="bx-bx-chevron-right" data-inline="false"></span> <a href="#">Services</a></li>
                              <li><span className="iconify" data-icon="bx-bx-chevron-right" data-inline="false"></span> <a href="#">Terms of service</a></li>
                              <li><span className="iconify" data-icon="bx-bx-chevron-right" data-inline="false"></span> <a href="#">Privacy policy</a></li>
                            
                          </div>
                
                          <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                           
                              <li><span className="iconify" data-icon="bx-bx-chevron-right" data-inline="false"></span><a href="#">Web Design</a></li>
                              <li><span className="iconify" data-icon="bx-bx-chevron-right" data-inline="false"></span><a href="#">Web Development</a></li>
                              <li><span className="iconify" data-icon="bx-bx-chevron-right" data-inline="false"></span><a href="#">Product Management</a></li>
                              <li><span className="iconify" data-icon="bx-bx-chevron-right" data-inline="false"></span><a href="#">Marketing</a></li>
                              <li><span className="iconify" data-icon="bx-bx-chevron-right" data-inline="false"></span><a href="#">Graphic Design</a></li>
                           
                          </div>
                    </div>
                </div>
            </section>

            <section className=" bg-light" style={{padding:"30px"}}>
                <div className="container">
                    <div className="row">
                        <div className=" col text-center text-md-left">
                            <div>
                              &copy; <strong>Footer Space</strong>
                            </div>
                          </div>
                          <div className=" col social-links text-center text-md-right">
                            <a href="#" className="twitter"><span className="iconify" data-icon="bx-bxl-twitter" data-inline="false" style={{width:"25px" ,height: "25px", margin:"auto 5px"}}></span></a>
                            <a href="#" className="facebook"><span className="iconify" data-icon="bx-bxl-facebook" data-inline="false" style={{width:"25px" ,height: "25px", margin:"auto 5px"}}></span></a>
                            <a href="#" className="instagram"><span className="iconify" data-icon="bx-bxl-instagram" data-inline="false" style={{width:"25px" ,height: "25px", margin:"auto 5px"}}></span></a>
                            <a href="#" className="google-plus"><span className="iconify" data-icon="bx-bxl-skype" data-inline="false" style={{width:"25px" ,height: "25px", margin:"auto 5px"}}></span></a>
                            <a href="#" className="linkedin"><span className="iconify" data-icon="bx-bxl-linkedin" data-inline="false" style={{width:"25px" ,height: "25px", margin:"auto 5px"}}></span></a>
                            <a href="#" className="back-to-top" className="sticky-right" style={{float:" right"}}><span className="iconify" style={{width:"25px" ,height: "25px", margin:"auto 5px", float:"right"}} data-icon="ri-arrow-up-line" data-inline="false"></span></a>
                            <div id="preloader"></div>
                        </div>

                    </div>
                   
                  </div>
                </section>
        </>
    }
}

export default Footer;