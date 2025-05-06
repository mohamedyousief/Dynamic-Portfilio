
const Message = ({role,message}) => {
    return (
        <div className={`messege ${role}-message`}>
            {role==="bot" ? <i class="ri-robot-2-line"></i> : ""}
            <p className='message-text'>
                {message}
            </p>
        </div>
    );
}

export default Message
