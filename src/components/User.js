import React,{useState,useEffect} from "react";
import axios from "axios";
import './User.css'

function User(){
    const[User2,SetUser]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/userall',
        { headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}}
        ).then((Response)=>{
            console.log("check",Response);
            SetUser(
                Response.data
            )
    
        }).catch(function(err){
            console.log(err);
        })
    
       
    


    },[]);
    return<>
 
     {
        User2.map(function(val){
            return<>
            {val.username}
            {val.email}
            {val.password}
            {val.userType}
            <img src={'http://localhost:4000/'+val.image} alt=""></img>
            </>
        })
     }
    </>
}
export default User;    