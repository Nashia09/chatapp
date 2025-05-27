import React from 'react'

export const ChatInput = () => {
  return (
    <div>
        <form className="bg-amber-300 fixed bottom-0 w-full py-10 
        shadow-lg">
          
<input
 placeholder="begin banter....."
className="input focus:outline-none w-full bg-amber-200 rounded-full"
type='text'
          />

    <button className="w-auto bg-amber-700 
     text-white font-bold rounded-r-lg text-lg px-5">Send</button>
        </form>
    </div>
  )
}
