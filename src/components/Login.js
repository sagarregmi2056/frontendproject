import React, { Component } from 'react'
// import { useNavigate, navigate } from 'react-router-dom';
import axios  from "axios";
import './Login.css';
class Login extends Component{
    // state is use to initialize data like constructor
    // constructor(){
    //     super();
    
    // navigate=useNavigate();
    
    state={
        email:"",
        
        password:"",
      

    }
    changeHandle=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
// }
    // event as a argument 
    // calling this function using onclick event

    btnlogin=(e)=>{
        e.preventDefault();
        // arko page ma najaos vanyarw e.preventDefault use garyako fresh hoss vanyarw

        // e.preventDefault();
        // hamro value haru input ko backend ma pathako
        axios.post("http://localhost:4000/login",this.state).then(function(res){
            console.log(res);
           console.log("token check",res.token);
           localStorage.setItem('token',res.data.token);
           localStorage.setItem('userType',res.data.userType);
           alert("login successfull");
           window.location.href='/user2'
        })
        .catch(function(err){
            alert("login failed");

        })


    }
    render(){
        return(
            <div className="body">
           
                <form className="form" >
                <h1>login</h1>
 
  <label for="lname">email:</label>
  <input type="text" id="lname" name="email" value={this.state.email} onChange={this.changeHandle}/>
  <label for="fname">password:</label>
  <input type="text" id="fname" name="password" value={this.state.password} onChange={this.changeHandle}/>

  <button type="submit" onClick={this.btnlogin} >login</button>
  
  {/* <a>REGISTER</a> */}
  {/* using button we are calling function btnlogin(e) */}
</form>
            </div>
        )
    }
}
export default Login;
