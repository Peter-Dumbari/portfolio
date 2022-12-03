import React, { useContext } from 'react';
import { useEffect } from 'react';
import { showContext } from '../../Pages/getuscontacted/Getuscontacted';
import "../Toasts/Toast.scss";


export default function Toast({ show}) {
    const setAlerter = useContext(showContext)
    
    useEffect(()=>{
      setTimeout(() => {
        setAlerter(false);
      }, 5000);
    },[])
  return (
    <div className={`toast_container animate__animated animate${!show? "__bounceOutRight" :"__backInLeft"}`}>
        <span><i className="fa-solid fa-thumbs-up"></i> Thanks, your project has being sent, expect our Response sooner!</span>
        <button onClick={()=>setAlerter(!show)}>Close</button>
    </div>
  )
}
