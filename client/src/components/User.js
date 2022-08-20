/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaGem, FaGoogle, FaTimes } from 'react-icons/fa';

function User() {
    let[reg,showReg]=useState(true);
    let [login,showLogin]=useState(false);
  
  return (
    <div className='user' >
        <FaTimes 
        className='close'
         onClick={()=>{
            window.location.reload();
         }
           
        }
        onDoubleClick={()=>{
            window.location.reload();
        }}/>
        <div className='wsr'>
        <input type='radio'
        onClick={()=>{
            showReg(true)
            showLogin(false)
            
            
        }}
        />Create flock account account
        <input type='radio'
        onClick={()=>{
            showLogin(true)
            showReg(false)
        }}
        />
        login to account
        </div>
        {reg&&(
        <form className='reg-form' >
            <label>
                Username
            <input type='text' placeholder='John Furgerson' />
            </label>
            <label>
                Role
                <input type='text' placeholder='Developer' />
            </label>
            <label>
            create Password
            <input type='password' placeholder="hgashxgsjds"  />
            </label>
             <label>
            confirm Password
            <input type='password' placeholder="hgashxgsjds"  />
            </label>
            <label>
                Upload data
                <input type='submit'/>
            </label>
        </form>)}
        {login &&(
            <form className='login'>
                <label>
                    username
                    <input type='text' />
                </label>
                 <label>
                    enter password
                    <input type='password' />
                </label>
                <label>
                    login 
                    <input type='submit' />
                </label>

                <p href="" className='forgot-password' >
                    Forgot password ?
                </p>
            </form>
        )
        }

       
        <button className='lwg'>
           <FaGoogle/> Login with Google
        </button>
        <button className='gac'>
          <FaGem/>  Login with Glitex a/c
        </button>
        
    </div>
  )
}

export default User