import react, { useState } from "react";


class CowinApi extends react.Component{
    constructor(){
        super();
      this.state={ items:[],check:false, value:637001};
      }


       retriveData=()=>{
        
        let pin=this.state.value;
        
          fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pin+'&date=31-03-2021')
          .then(res => res.json())
          .then(data=>{
            this.setState({
              items:data.sessions
            });
            console.log("test", this.state.items.length)});

           /// alert(this.state.items[0].center_id);
      }
      componentDidMount(){
        this.retriveData();
      }
      
    
     handleInput=(e)=>{
      this.setState({value:e.target.value});
    }
    
    

    render(){
        
        
        var {items}=this.state;
        var item=items;
        return <div className="cowinbody">
         
          <br></br>
          <br></br>
    <h1>Covin Slot Availability Check By Pincode</h1>
    
     <label>Enter Your Pincode
          </label>
          <input type='text' id="pin" className="form-control-sm" style={{marginLeft:"10px"}} value={this.state.value} onChange={this.handleInput} ref="pin"></input>
                    
              <button className="btn btn-light" style={{margin:'20px'}}onClick={this.retriveData} >Check Availability</button>

              <br></br>
         
            <br>
            </br>
         <div>
                        
           <h3>The Availablity Details Are</h3>  
           
           <table  >
              <thead style={{color:'Red' ,fontSize:'18px' }}>
                
                   <tr>
                     <th>Center ID</th>
                     <th>Center_Name</th>
                     <th>District</th>
                     <th>State</th>
                     <th>Fee type</th>
                     <th>Avail Timings</th>
                   </tr>
                 </thead>
           {this.state.items.length>0? item.map(it =>(
              <tbody>
                <tr key={item.center_id}>
                  <td>{it.center_id}</td>
                  <td>{it.name}</td>
                  <td>{it.district_name}</td>
                  <td> {it.state_name}</td>
                  <td> {it.fee_type}</td>
                  <td>{it.from} to {it.to}</td>
                </tr>
              </tbody> ))
         :<div><p className="text-primary text-center" style={{padding:"50px"}}>No Data Found</p></div>}
           
           
            
               </table>
            
          </div>
                <br></br>
                <br></br>
               
        </div>
    }
}
export default CowinApi;