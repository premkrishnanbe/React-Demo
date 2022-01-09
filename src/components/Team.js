import React from "react";

class Team extends React.Component{


    render(){
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


}

export default Team;