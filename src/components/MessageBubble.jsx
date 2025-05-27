import React from 'react'

const MessageBubble = () => {
  return (
    <div>
        <div>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="" alt='profileImage' />
                </div>
            </div>

            <div className="chat-header">
                 Rexy Gulp
                 <time className="text-xs opacity-50">10:20 am</time>
            </div>
            <div className="chat-bubble">This is not a drill..!!!</div>
            <div className="chat-footer">Delivered</div>
        </div>
    </div>
  )
}

export default MessageBubble