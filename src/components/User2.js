import React,{Component} from 'react';
// import User from './User';
import axios from 'axios';
import { Navigate} from 'react-router-dom'
class User2 extends Component{

    //constructor
    
   state={
    items:[],
    config:{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
    }
   } 

   
//method
componentDidMount(){
    axios.get('http://localhost:4000/userall',this.state.config).then((Response)=>{
        console.log("check",Response);
        this.setState({
            items:Response.data
        })

    }).catch(function(err){
        console.log(err);
    })

   

   }
   deletedata=(userid)=>{
    axios.delete("http://localhost:4000/deleteuser/"+userid).then((res)=>{
        alert("delete successful")
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

}


    render(){
        if(localStorage.getItem('userType')&&localStorage.getItem('userType')!=='Admin'){
            return<Navigate to='/login'/>
        }
        return(
            <>

{
    this.state.items.map((val)=>{
        return(
            <>
            
            {val.username}
            {val.email}
            {val.password}
            {val.userType}
            <img src={'http://localhost:4000/'+val.image} alt='loading'></img>
            <button onClick={this.deletedata.bind(this,val._id)}>deleteuser</button>
            </>
            
        )

    })
}

            </>
        )
    }

}
export default User2;



