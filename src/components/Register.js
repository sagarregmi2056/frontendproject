
import { Component} from "react";
import axios from 'axios';
import './Register.css'
class Register extends Component{
   
        state={
            username:"",
            email:"",
            password:"",
            userType:"",
            nimage:""
        }
        //value change data store 
        changeHandle=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        fileHandler = (e)=>{
            this.setState({
                nimage : e.target.files[0]
            })
        }
        btnlogin=(e)=>{
            //now we need to sent data to our api
            const data = new FormData();
            e.preventDefault();//prevents from form to be refreshed
            data.append('username', this.state.username)
        data.append('email', this.state.email)
        data.append('password', this.state.password)
        data.append('userType', this.state.userType)
        data.append('nimage',this.state.nimage)
            axios.post('http://localhost:4000/register',data)
            .then((Response)=>{
                console.log(Response)
                alert("login successful")
            })
            .catch((err)=>{
                alert("login failed")
                    console.log(err.Response)
                }
            )
        }
        render(){


           
        return(
            <div>this is Add Bus page
<section class="register container-fluid bg">
<h1 class="r1">this is Add Bus page</h1>
                    <section class="row justify-content-center">
                       
                        <form class="cover">
                        
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"name="username">username</label>
    <input type="email" class="form-control"  placeholder="title" name="username" defaultValue={this.state.username} onChange={this.changeHandle}id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="name" name="email" defaultValue={this.state.email} onChange={this.changeHandle}></input>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">password</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="name" name="password" defaultValue={this.state.password} onChange={this.changeHandle}></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">userType</label>
    <input type="email" class="form-control"placeholder="desc" name="userType" defaultValue={this.state.userType} onChange={this.changeHandle}></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image</label>
    <input type="file" class="form-control" name="nimage"  defaultValue={this.state.nimage} onChange={this.fileHandler} />
  </div>

  <button type="submit" class="btn btn-primary" onClick={this.btnlogin} >Submit</button>
</form>
                        </section>
                    </section>

            </div>
            
        )
        
    }
}
export default Register;