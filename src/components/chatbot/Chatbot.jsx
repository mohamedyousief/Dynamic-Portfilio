import React, { useEffect, useRef, useState } from 'react'
import Message from './Message';
import { botMessage } from '../../services/ChatBoat';
import { pre } from 'framer-motion/client';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            role: "bot",
            message: "hello there \nhow can i help you today ?"
        }
    ]);
    const [messageinp, setMessageinp] = useState('');


    const getChatResponse = async (message) => {
    const res = await botMessage(message);
    return res;
};

const handelSubmit = async (e) => {
    e.preventDefault();
    
    if (!messageinp.trim()) return;

    setMessages(prev => [...prev, { role: "user", message: messageinp }]);
    setMessageinp("");

    const thinkingMessage = { role: "bot", message: "thinking..." };

    setTimeout(()=>{setMessages(prev => [...prev, thinkingMessage]);},300)
    

    setTimeout(async () => {
        const res = await getChatResponse(messageinp);

        setMessages(prev => [
            ...prev.slice(0, -1),
            { role: "bot", message: res }
        ]);
    }, 300);

    
};

    const chatBodyRef = useRef()
    
    useEffect(() => {
        chatBodyRef.current.scrollTo({top:chatBodyRef.current.scrollHeight,behavior:"smooth"})
    },[messages])
    const [show, setShow] = useState(false)
    
    return (
        <>
            <div className={`ChatContainer ${show? 'show-chat' : ''}`}>
                <button id='chat-togeller' onClick={() => setShow(prev => !prev)}>
                    {show ?<i class="ri-close-line"></i> :<i class="ri-chat-2-fill"></i>}
            </button>
                <div className="chatboat-popup" >
                    <div className="chat-header">
                        <div className="headerinfo">
                            <i class="ri-robot-2-line"></i>
                            <h2 className="logo-text">Chatbot</h2>
                        </div>
                        <div className='btn'><i class="ri-arrow-down-line"></i></div>
                    </div>
                    <div className="chatbody" ref={chatBodyRef}>
                        {messages.map((m, idx) => (
                            <Message role={m.role} key={idx} message={m.message} />
                        ))}
                    </div>
                    <div className="chat-footer">
                        <form >
                            <input value={messageinp} onChange={(e) => setMessageinp(e.target.value)} type="text" placeholder='message' className='message-inp' required />
                            <button onClick={handelSubmit}><i class="ri-arrow-up-line"></i></button>
                        </form>
                    </div>
                </div>
            
            </div>
        </>
    );
}

export default Chatbot
