// import logo from './logo.svg';
import Register from './components/Register';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import BODY from './components/BODY.JS';
import Login from './components/Login';
import User2 from './components/User2';
import User from './components/User';
import Logout from './components/Logout';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path='/Register' exact element ={<Register/>} />
       <Route path='/Login' exact element ={<Login/>} />
       <Route path='/BODY'  exact element={<BODY/>}/>
       <Route path='/User2' exact element={<User2/>}/>
       <Route path='/User' exact element={<User/>}/>
       <Route path='/logout' exact element={<Logout/>}/>
       
       
 
     </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
