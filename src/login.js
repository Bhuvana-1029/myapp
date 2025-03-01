//import React from 'react'
import React,{useState}from 'react';
 import "./login.css";

class Signin extends useState {
render() { 
//  const login=()=> {    
   // return(
     // <div>
      //  Login
      //</div>
   // )
 // }
   // function signup(){
     // window.location.replace("/home");
   // }
    //var userData=[
    // {userName:"Abi", passcode:111, cart:[]},
    // {userName:"Abi", passcode:111, cart:[]},
    // {userName:"Abi", passcode:111, cart:[]}];
  
    //function Signup(){
     //var userName=document.getElementById("userName").value;
      //var userPasscode=document.getElementById("passcode").value;
      //console.log(userName,passcode);
      //}
    //userData.filter((data)=>{  
    //if(userDetail.length >0){
     // if(userDetail[0].passcode==userPasscode){
      //  localStorage.setItem("userName",userDetail[0].userName);
      //}else{
        //console.log("Wrong passcode");
     // }
     // }
    //});

    //return(
    //  <div>
     //   <input id="userName"/>
       // <input id="passcode"/>
       // <button onClick={Signup} className=''>Login</button>
      //</div>
   // )
  
//  }
 // export default login
   //   var userDetail=userData.filter((data)=>{
     //   return userName==data.userName;
      //});
      //console.log(userDetail);
      //if(userDetail.length >0){
       // if(userDetail[0].passcode==userPasscode){
        //  localStorage.setItem("userName",userDetail[0].userName);
        //}else{
          //console.log("Wrong passcode");
        //}
        //}
      //}
    //}
  //}
   // var activeUser=localStorage.getItem("userName");
    return (
      <div className="login">
       <h4>Login</h4>
       <form>
          <div className="text_area">
            <input
            type="text"
              id="username"
              name="username"
              defaultValue="username"
            className="text_input"
    
           />
         </div>
         <div className="text_area">
          <input
            type="password"
            id="password"
            name="password"
            defaultValue="password"
            className="text_input"

          />
        </div>
      <input
        type="submit"
          value="LOGIN"
          className="btn"
       />
      </form>
      <a className="link" href="/signup">Sign Up</a>
     </div>
    )
}
}
export default Signin;