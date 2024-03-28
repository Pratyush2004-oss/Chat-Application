import React, { useEffect, useRef } from 'react'
import Singlemessage from './Singlemessages'
import UseGetMessages from '../../Hooks/UseGetMessages'
import MessageSkeleton from '../Skeletons/MessageSkeleton';

const Messages = () => {
    const { messages, loading } = UseGetMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavioor: "smooth" });
        }, 100)
    }, [messages])
    console.log("messages : ", messages)
    return (
        <div className='px-4 flex-1 overflow-auto'>

            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id}>
                        <Singlemessage
                            message={message}
                        />
                    </div>
                ))}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className='text-center text-xl'>Send a message to start the Conversation</p>
            )}



        </div>
    )
}

export default Messages
