import React from "react";

export function Header(){
    return (<>
        <header>
            <nav className="navbar navbar-expand-md  navbar-light bg-light fixed-top">
                <div className="container">
                <a href="#" className="navbar-brand">Task 1</a>
                <button className="navbar-toggler btn-bg-dark" type="button" data-toggle="collapse" data-target="#myNavBar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavBar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a className="nav-link"  href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
                        <li className="nav-item" ><a className="nav-link" href="#footer">contact</a></li>
                        <a href="#about" style={{marginLeft:"10px"}} className="btn btn-primary text-white">Get Started</a>
                    </ul>

                </div>
            </div>
          
            </nav>
            
        </header>
        </>);
}

export function Home(){
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
export function About() {
     
    return ( <>
  <section id="about" style={{marginTop:"50px"}}>
            <div className="container" >
             <div className="container" style={{paddingTop: "60px"}}>
                 
                 <div className="text-center">
                     <h2 className="title">ABOUT US</h2>
                     <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                 </div>
             </div>
       
         <div className="container text-justify">
             <div className="row">
                 <div className="col-md-6 ab2">
                     <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua.
                       </p>
                      
                         <li>
                             <img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-262-direction-empty@2x.png" width="24px" height="22px"></img>
                             Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                         <li>
                             <img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-262-direction-empty@2x.png" width="24px" height="22px"></img>
                             Duis aute irure dolor in reprehenderit in voluptate velit</li>
                         <li>
                             <img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-262-direction-empty@2x.png" width="24px" height="22px"></img>
                             
                             Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    
                 </div>
                 <div className="col-md-6 ab2">
                     <p>
                         Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                         culpa qui officia deserunt mollit anim id est laborum.
                       </p>
                       <a href="#" className="btn btn-primary">Learn More</a>
                 </div>
             </div>
         </div>
            </div>
         </section>

         <section style={{marginTop:"50px"}}>
             <div className="container-fluid bg-light">
                 <div className="row text-xl-center">
                     <div className="col-md col-sm-6 text-center text-info">
                         <span  style={{fontSize:"2.5rem"}} className="text-secondary font-weight-bold" >65</span>
                         <p className="text-dark">Happy Clients</p>
                     </div>
                     <div className="col-md col-sm-6 text-center ">
                         <span style={{fontSize:"2.5rem"}} className="text-secondary font-weight-bold">85</span>
                         <p className="text-dark">Projects</p>
                     </div>
                     <div className="col-md col-sm-6 text-center text-info">
                         <span style={{fontSize:"2.5rem"}}  className=" text-secondary font-weight-bold">12</span>
                         <p className="text-dark">Year of experience</p>
                     </div>
                     <div className="col-md col-sm-6 text-center text-info">
                         <span style={{fontSize:"2.5rem"}}  className=" text-secondary font-weight-bold">15</span>
                         <p className="text-dark">Awards</p>
                     </div>
                 </div>
             </div>
         </section>

         <section style={{marginTop:"50px",marginLeft:" 20px",marginRight: "20px"}}>
             <div className="container text-justify" >
                 <div className="row " >
                     <div className="col-md-6" >
                         <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/about-video.jpg" className="img-fluid" alt=""></img>
                        
                       </div>
                       <div className="col-lg-6 pt-3 pt-lg-0 content">
                         <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                         <p >
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                           magna aliqua.
                         </p>
                         
                          
                         <p>
                           Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                           velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                           culpa qui officia deserunt mollit anim id est laborum
                         </p>
                       </div>
             
                     </div>
                 </div>
             </section>

             <section style={{marginTop: "50px"}}>
             <div className="container-fluid bg-light bg-info">
                 <div className="row">
                 
                     <div className="col-md col-sm-6">
                         <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-1.png" className="img-fluid bwe" style={{padding:"40px",}}></img>
                     
                     </div> 
                     <div className="col-md col-sm-6">
                         <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-2.png" className="img-fluid bwe" style={{padding:"40px"}}></img>
                     
                     </div>
                     <div className="col-md col-sm-6">
                         <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-2.png" className="img-fluid bwe" style={{padding:"40px"}}></img>
                     
                     </div>
                  
                     <div className="col-md col-sm-6" >
                         <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-4.png" className="img-fluid bwe" style={{padding:"40px"}}></img>
                     
                     </div>
                     <div className="col-md col-sm-6" >
                         <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-5.png" className="img-fluid bwe" style={{padding:"40px"}}></img>
                     
                     </div>
                     <div className="col-md col-sm-6" >
                         <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-6.png" className="img-fluid bwe" style={{padding:"40px"}}></img>
                     
                     </div>  
                 </div>
             </div>


            
         </section>

         <section>
        <div className="container" >
         <div className="container" style={{marginTop: "50px"}}>
             <div className="row">
                 <div  className="text-center"  style={{marginTop: "30px"}} >
                     <h2>Testimonials</h2>
                     <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                 </div>
             </div>
         </div>
         <div className="container text-justify"style={{marginLeft:"0 auto"}}>
            <div className="row">
                  <div className="col bg-light align-items-stretch carousel-cell rounded tm">
                         <p>
                             <span className="iconify" data-icon="bx-bxs-quote-alt-left" data-inline="false"></span>
                             Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                             <span className="iconify" data-icon="bx-bxs-quote-alt-right" data-inline="false"></span>
                         </p>
                         <div className="text-center">
                         <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/testimonials/testimonials-1.jpg" className="rounded-circle rc"  alt=""></img>
                         <h3>Saul Goodman</h3>
                         <h4>Ceo &amp; Founder</h4>
                          </div>
                     </div>
                     <div className="col bg-light carousel-cell rounded tm">
                         <p>
                             <span className="iconify" data-icon="bx-bxs-quote-alt-left" data-inline="false"></span>
                             Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                             <span className="iconify" data-icon="bx-bxs-quote-alt-right" data-inline="false"></span>
                         </p>
                             <div className="text-center">
                         
                         <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/testimonials/testimonials-2.jpg" className="rounded-circle rc" alt=""></img>
                         <h3>Sara Wilsson</h3>
                         <h4>Designer</h4>
                          </div>
                     </div>
                     <div className="col bg-light   carousel-cell rounded tm">
                         <p>
                         <span className="iconify" data-icon="bx-bxs-quote-alt-left" data-inline="false"></span>
                         Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                         <span className="iconify" data-icon="bx-bxs-quote-alt-right" data-inline="false"></span>
                     </p>
                         <div className="text-center">
                    
                     <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/testimonials/testimonials-3.jpg" className="rounded-circle rc" alt=""></img>
                     <h3>Jena Karlis</h3>
                     <h4>Store Owner</h4>
                       </div>
                     </div>
                     
         
              
            
   
          
           
        </div>
        </div>
        </div>
    
         </section>

        


      </>)
  
}

export function Service(){
    return <>
    <section  id="services">
 <div className="container">
     <div className="container" style={{marginTop: "50px",paddingTop: "60px"}}>
         <div className="row">
         <div className="title text-center">
             <h2>Sevices</h2>
             <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
         </div>
         </div>
     </div>



     <div className="container" style={{margin:"0 auto", paddingBottom:"50px"}}>
         <div className="row text-center">
             
         <div className="col-md card se"  style={{padding:"40px 20px"}}>
                 <div className="icon">
                     <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                         
                       <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                     </svg>

                   </div>
                   <h4><a href="">Magni Dolores</a></h4>
                   <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                 
             </div>

             <div className="col-md card se" style={{padding:"40px 20px"}}>
                 <div className="icon">
                     <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                       <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                     </svg>
                   </div>
                   <h4><a href="">Sed Perspiciatis</a></h4>
                   <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                 
             </div>

             <div className="col-md card se"  style={{padding:"40px 20px"}}>
                 <div className="icon">
                     <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                         
                       <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                     </svg>

                   </div>
                   <h4><a href="">Magni Dolores</a></h4>
                   <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                 
             </div>
         </div>

           <div className="row text-center">
             <div className="col-md card se"  style={{padding:"40px 20px"}}>
                 <div className="icon">
                     <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                       <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                     </svg>
                     <i className="bx bx-layer"></i>
                   </div>
                   <h4><a href="">Nemo Enim</a></h4>
                   <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                 
             </div>
             <div className="col-md card se"  style={{padding:"40px 20px"}}>
             <div className="icon">
                 <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                   <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                 </svg>
                 <i className="bx bx-slideshow"></i>
               </div>
               <h4><a href="">Dele Cardo</a></h4>
               <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
               </div>
             
             <div className="col-md card se"  style={{padding:"40px 20px"}}>
                 <div className="icon">
                     <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                       <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                     </svg>
                     <i className="bx bx-arch"></i>
                   </div>
                   <h4><a href="">Divera Don</a></h4>
                   <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
             </div>

           
            
         </div>
     </div>
 </div>
</section>


<section className="cta">
 <div className="container-fluid text-white"style={{margin:"auto",padding: "50px"}}> 
     <div className="row ">
         <div className="text-center">
             <h3>Call To Action</h3>
         <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a style={{marginTop:"15px" ,padding:"10px 25px"}} className="btn btn-primary rounded" href="#">Call To Action</a>

         </div>
     </div>
</div>
</section>
</>
}
export function Portfolio(){
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
export function Team(){
    return <>
    <section id="team" className="bg-light" style={{margin:"50px auto", padding:"60px"}}>
            <div className="container">
                <div className="container-flex" >
                    <div className="row ">
                       <div className="text-center">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                      
                       </div>
                    </div>
                </div>

                <div className="container" style={{margin :"30px auto 10px auto", fontSize:'12px'}}>
                    <div className="row">
                        <div className="col-md-3">
                        <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/team/team-1.jpg" className="img-fluid" alt=""></img>
                        <div className="text-center bg-white rounded tmm">
                            <h4 style={{fontSize:'15px'}}>Walter White</h4>
                        <span>Chief Executive Officer</span>
                        </div>
                    
                    </div>

                        <div className="col-md-3">
                            <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/team/team-2.jpg" className="img-fluid" alt=""></img>
                        <div className="text-center bg-white rounded tmm">
                            <h4 style={{fontSize:'15px'}}>Sarah Jhonson</h4>
                <span>Product Manager</span>
                        </div>    
                        </div>

                            <div className="col-md-3">
                                <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/team/team-3.jpg" className="img-fluid" alt=""></img>
                                <div className="text-center bg-white rounded tmm">
                                    <h4 style={{fontSize:'15px'}}>William Anderson</h4>
                                    <span>CTO</span>
                                </div>      
                            </div>

                     <div className="col-md-3" >
                         <div>
                    <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/team/team-4.jpg" className="img-fluid" alt=""></img>
                    </div>
                    <div className="text-center bg-white rounded tmm ">
                        <h4 style={{fontSize:'15px'}}>Amanda Jepson</h4>
                        <span >Accountant</span>
                    </div>  
                    </div>
                </div>
            </div>
            </div>
        </section>
    </>
}

export function Footer(){
    return <><section id="footer">
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
