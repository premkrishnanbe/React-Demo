import react, { useEffect, useState } from "react";


function CowinFn(){
    
const [item,setItem]=useState([]);
const [value,setValue]=useState(600026);

useEffect(() => {
 retriveData();
}, []);
      const retriveData=()=>{
        
          fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+value+'&date=31-03-2021')
          .then(res => res.json())
          .then(data=>{
              setItem(data.sessions); 
            console.log("test", this.state.sessions)});

           /// alert(this.state.items[0].center_id);
      }
      
    
    
    
    

    
        return <div className="cowinbody">
         
          <br></br>
          <br></br>
    <h3>Covin Availability Centers check By Pincode</h3>
    
     <label>Enter Your Pincode
          </label>
          <input type='text' className="form-control-sm" style={{marginLeft:"10px"}} value={value} onChange={e=>setValue(e.target.value)}></input>
                    
              <button className="btn btn-light" style={{margin:'20px'}}onClick={retriveData} >Check Availability</button>

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
           {item.length>0 ? item.map(it =>(
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
export default CowinFn;