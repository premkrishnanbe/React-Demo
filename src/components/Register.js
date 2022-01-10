import React, { useState } from 'react';
import {Formik, useFormik} from 'formik';
import { ViewDataContent } from './ViewDataContent';


const validateEmployee = empData => {
    const errors = {};
  
    if (!empData.Name && empData.Name.label>5) {
      errors.Name = 'Please Enter Employee Name';
    } else if (empData.Name.length > 20) {
      errors.Name = 'Name cannot exceed 20 characters';
    }
  
    if (!empData.Location) {
      errors.Location = 'Please Enter Employee Location';
    } 
  
    if (!empData.EmailId) {
      errors.EmailId = 'Please Enter Email ID';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
      errors.EmailId = 'Invalid email address';
    }

    if(!empData.mob){
        errors.mob="Please enter your Mobile No";
    }
    else if(empData.mob.length>10){
        errors.mob="Mobile No Should be 10 Digit";
    }

    if(empData.exp<2){
        errors.exp="Experience should be more than 2 Years"
    }
  
    return errors;
  };
  
  export const EmployeeComponent=()=>{
      const [bool,setBool]=useState("true");
    const formik=useFormik({
      initialValues:{
        Id:'',
        Name:'',
        Location:'',
        Salary:'',
        EmailId:'',
        mob:'',
        exp:'',
      },
      validate:validateEmployee,
      onSubmit:(values)=>{
      
        fetch('http://localhost:56852/Api/Employee').then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error();
  }
})
.then((res) => {
    if(res){
        alert('New Employee is Created Successfully');
        setBool(false);
             }
  
})
.catch((error) => {
  alert("server is Down try Again Later!")
  setBool(false);
});

    

      }
    });
  
    return (<>
      
      {bool ?(<div>
          <br></br>
          <br></br>
        <h4>Insert using Web Api with the Functional Components</h4>
        <h2>Register Form...</h2>
        
    <form className="text-primary" onSubmit={formik.handleSubmit}>
          <p>
            <label htmlFor="Id">Employee ID : </label>
            <input type="text" name="Id" id="Id" value={formik.values.Id}
                    onChange={formik.handleChange}></input>  
          </p>
          <p>
             <label htmlFor="Name">Employee Name : </label>
             <input type="text" name="Name" id="Name" value={formik.values.Name}
                    onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    {formik.touched.Name && formik.errors.Name ? <span style={{color:'red',marginLeft:'165px'}}>{formik.errors.Name}</span> : null}
                    
           </p>
           <p>
             <label htmlFor="mob">Mobile No : </label>
             <input type="text" name="mob" id="mob" value={formik.values.mob}
                    onChange={formik.handleChange}></input>
                   <div> {formik.touched.mob && formik.errors.mob ? <span style={{color:'red',marginLeft:'165px'}}>{formik.errors.mob}</span> : null}</div>
                    
           </p>
           <p>
             <label htmlFor="exp">Year Of Experience:</label>
             <input type="text" name="exp" id="exp" value={formik.values.exp}
                    onChange={formik.handleChange}></input>
                   <div> {formik.touched.exp && formik.errors.exp ? <span style={{color:'red',marginLeft:'165px'}}>{formik.errors.exp}</span> : null}</div>
                    
           </p>

           <p>
             <label htmlFor="Location">Employee Location: </label>
             <input type="text" name="Location" id="Location" value={formik.values.Location}
                    onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                   <div> {formik.touched.Location && formik.errors.Location ? <span style={{color:'red',marginLeft:'165px'}}>{formik.errors.Location}</span> : null}</div>
                   
           </p>
           <p>
             <label htmlFor="Salary">Employee Salary : </label>
             <input type="text" name="Salary" id="Salary" value={formik.values.Salary}
                    onChange={formik.handleChange}></input>                  
           </p>
           <p>
             <label htmlFor="EmailId">Employee Email ID : </label>
             <input type="text" name="EmailId" id="EmailId" value={formik.values.EmailId}
                    onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                   <div> {formik.touched.EmailId && formik.errors.EmailId ? <span style={{color:'red',marginLeft:'165px'}}>{formik.errors.EmailId}</span> : null}</div>
                   
           </p>
           <button type="submit">Create</button>
    </form>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
      </div> ):<ViewDataContent></ViewDataContent>}
      </>
    );
  }

