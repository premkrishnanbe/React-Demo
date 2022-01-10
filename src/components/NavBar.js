
function NavBar(){



    return <>
    

    <div id="mySidenav" className="sidenav" style={{width:"200px"}}>
  <a href="/home">Home</a>
  <a href="/cowin" style={{fontSize:"20px"}}>Cowin Api Class Comp.</a>
  <a href="/cowinfn" style={{fontSize:"20px"}}>Functional Comp.</a>
  <a href="/read" style={{fontSize:"20px"}}>Card View(Emp List DB)</a>
  <a href="/insert" style={{fontSize:"20px"}}>Register Form(insert)</a>
  <a href="/temp">temp</a>
  <a href="*" style={{position:"absolute",bottom:"5px",fontSize:"20px"}}>Invalid Url</a>

</div>

    




    </>
}
export default NavBar;