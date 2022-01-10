import react from "react";

const InvalidError=()=>{

    return <>
    <div className="container text-center">
        <div className="row">
            <div className="col" style={{position:"relative",top:"100px"}}>
            <img src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/344/external-invalid-money-transfer-notification-with-an-error-money-fresh-tal-revivo.png"  width="100px" height="100px"></img>
                <h3 className="text-danger" style={{margin:"20px"}} >URL Seems to be Invalid !! Check the URL or go to <b><a href="/">Home Page</a></b></h3>
            </div>
        </div>
    </div>
    </>
}
export default InvalidError;