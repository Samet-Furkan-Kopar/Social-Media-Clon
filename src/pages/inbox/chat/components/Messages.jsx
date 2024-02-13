/* eslint-disable react/prop-types */
import Message from './Message'
import ScrollToBottom from 'react-scroll-to-bottom';//otomatik alta atıyor
const Messages = ({messages}) => {
  return (
    <ScrollToBottom className="h-[calc(100%-144px)] pb-0  overflow-auto mt-2 px-3 messages-box">
        <div className='mb-auto'/>
        {messages?.map((message,key) => <Message message={message} key={key}/>)}
    </ScrollToBottom>
    
  )
}

export default Messages
