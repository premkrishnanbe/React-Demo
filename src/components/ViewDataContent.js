
import React, { useEffect, useState } from 'react';
function InvalidError(){

    return <>
    <div className="container text-center">
        <div className="row">
            <div className="col" style={{top:"10px"}}>
            <img src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/344/external-invalid-money-transfer-notification-with-an-error-money-fresh-tal-revivo.png"  width="100px" height="100px"></img>
                <h3 className="text-danger" style={{margin:"20px"}} >Server is Under Maintenence(not live) Please Try again Later or go to <b><a href="/">Home Page</a></b></h3>
            </div>
        </div>
    </div>
    </>
}

export function DummyData() {
    return <div className='col-4' style={{ margin: "15px 0 10px 0" }}>

        <thead ><tr><th>Premkumar Krishnan</th><th></th></tr></thead>

        <tr><td>Id :</td><td>13109288</td></tr>
        <tr><td>Mobile No. :</td><td>9876543210</td></tr>
        <tr><td>Email Id :</td><td>temp@gmail.com</td></tr>
        <tr><td>Location :</td><td>Chennai</td></tr>
        <tr><td>Experience :</td><td>1</td></tr>



    </div>


}
export const ViewDataContent = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:56852/Api/Employee')
            .then(res => res.json())
            .then(data => setItem(data));
            console.log("item",item.length);
    }, []);


    return <>

        <div className='container'>
            <h4>Insert using Web Api with the Functional Components</h4>
            <h5>Employee List ( Dummy Data static) </h5>
            <div className='row'>
                <DummyData />
                <DummyData />
                <DummyData />


            </div>
            <h4>DB Data</h4>
            <div className='row'>
                
                {item.length>0 ? item.map(it => (
                    <div className='col-4' style={{ margin: "15px 0 10px 0" }}>
                        <table style={{tableLayout:"fixed"}}><thead ><tr><th>{it.Name}</th><th></th></tr></thead>

<tr><td>Id </td><td>{it.Id}</td></tr>
<tr><td>Mobile No. </td><td>{it.mob}</td></tr>
<tr><td>Email Id </td><td>{it.EmailId}</td></tr>
<tr><td>Location </td><td>{it.Location}</td></tr>
<tr><td>Experience </td><td>{it.exp}</td></tr></table>


                    </div>
                )) :<InvalidError/> }


            </div>

        </div>
    </>


}
