import React from 'react'
import {chatData, groups, names} from './ChatDataBase'
import ChatDisplay from './ChatDisplay'

const ChatBox = ({chatId}) => {

  const chat = chatData.find((chat)=> chat.id === chatId.id && chat.name === chatId.name)
  const group = groups.find((group)=> group.id === chatId.id && group.name === chatId.name)

  if(chat){
     return <ChatDisplay 
     id={chat.id} 
     name={chat.name} 
     img={chat.img} 
     status={chat.active}
     lastMsg={chat.lastMsg} 
     />
  }else if(group){
     return <ChatDisplay 
     id={group.id} 
     name={group.name} 
     img={group.img} 
     status={group.active} 
     />
  }
  
  return (
    <ChatDisplay 
    id={chatData[0].id} 
    name={chatData[0].name} 
    img={chatData[0].img} 
    status={chatData[0].active} 
    lastMsg={chatData[0].lastMsg}
    />
  )
}

export default ChatBox