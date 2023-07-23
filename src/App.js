

import "./App.css";
import Header from "./Header";
import Home from "./Home";

import Checkout from "./Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise=loadStripe("pk_test_51NDM6aSCMSXmdhhuwNSthFceY2tiw35ir9iZ97dMYSuD9NTIMyfFSLwPrGuTsTSgAmNkle7RBiU53FQfOaucU19t00D9dauuIa")
function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>
  {

    auth.onAuthStateChanged(authUser=>
      {
        console.log('The user is>>',authUser);
        if(authUser)
        {
          dispatch({
            type:'SET_USER',
            user:authUser
          })

        }
        else{
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
      })
  }, [])



  return (
    <div>
  
    <BrowserRouter>
  <Routes>
  
<Route path='/orders' element={<><Header/><Orders/></>}/>
<Route path="/login" element={<Login/>}/>
<Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>

    <Route path='/' element={<><Header/><Home/></>}/>
    <Route path="/Checkout" element={<><Header/><Checkout/></>}/>
    
  </Routes>
 </BrowserRouter>
  </div>

  );}
  
       

export default App;

