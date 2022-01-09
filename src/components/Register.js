
import React, { useEffect, useState } from 'react';

function DummyData(){
return <div className='col-4'  style={{margin:"15px 0 10px 0"}}>
                    <tr>
                        <th>Application Id</th>
                        <td>82992</td>
                    </tr>
                    <tr>
                        <th>Application Id</th>
                        <td>Premkumar</td>
                    </tr>
                    <tr>
                        <th>Application Id</th>
                        <td>Premkumar</td>
                    </tr>
                    <tr>
                        <th>Application Id</th>
                        <td>Premkumar</td>
                    </tr>
                    <tr>
                        <th>Application Id</th>
                        <td>Premkumar</td>
                    </tr>
                    <tr>
                        <th>Application Id</th>
                        <td>Premkumar</td>
                    </tr>
                </div>
               
                
}
export const Register = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:56852/Api/Employee')
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    const dummyData = () => {
        alert();
        return
    }
    return <>

        <div className='container'>
            <h4>Insert using Web Api with the Functional Components</h4>
            <div className='row'>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
            <DummyData/>
               
            </div>

        </div>
    </>


}
