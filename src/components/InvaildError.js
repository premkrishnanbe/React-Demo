import react from "react";

const InvalidError=()=>{

    return <>
    <div className="container text-center">
        <div className="row">
            <div className="col" style={{position:"relative",top:"100px"}}>
            <img src="https://cdn-icons.flaticon.com/png/512/2797/premium/2797388.png?token=exp=1641744124~hmac=033d2a2e428c0942827c0d7389048fd5"  width="100px" height="100px"></img>
                <h3 className="text-danger" style={{margin:"20px"}} >URL Seems to be Invalid !! Check the URL or go to <b><a href="/">Home Page</a></b></h3>
            </div>
        </div>
    </div>
    </>
}
export default InvalidError;