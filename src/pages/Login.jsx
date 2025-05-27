import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import pic from '../assets/img.png'


export const Login = () => {
  return (
    <div className='flex h-screen'>
      {/* Add the login screen image */}
      <div className='w-1/2 bg-cover bg-center'
        style={{backgroundImage: `url(${pic})`}}
      >
        
       <div className='relative top-1/2 left-1/2 transform
       -translate-y-1/2 text-center'>
        
         <TypeAnimation  
           sequence= {[
            "Welcome back to Banter",
            1000,
            "Have meaningfull convos",
            1000,
            "Developed by NIIT React Class.",
            1000

           ]}
         wrapper='span'
         speed={50}
         style={{
            fontSize: "3em",
            display:'inline-block',
            fontWeight:'bold'
         }}
         repeat={Infinity}

         />
       </div>
      </div>

      {/* Other part of the screen */}

      <div className="flex w-1/2 items-center justify-center bg-amber-100">

      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        
         <h2 className="text-3xl font-semibold mb-4">Welcome back
            <span className="text-amber-400">Banter Buddy!</span>
             </h2>

        {/* Social Login Buttons */}

        <div className="space-y-4">
             <button className="w-full bg-red-400 rounded-full shadow-lg hover:bg-red-200">
                Login With Google
             </button>
        </div>
      </div>

      </div>
    </div>
  )
}
