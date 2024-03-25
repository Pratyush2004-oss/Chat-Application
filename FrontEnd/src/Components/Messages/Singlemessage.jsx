import React from 'react'

const Singlemessage = () => {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                </div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50"><time className="text-xs ml-1 text-black opacity-100">12:46</time></div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-bubble  text-white bg-green-800">I hate you!</div>
                <div className="chat-footer opacity-50"><time className="text-xs ml-1 text-black opacity-100">12:46</time></div>
            </div></div>
    )
}

export default Singlemessage