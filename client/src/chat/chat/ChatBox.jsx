import { useContext, useEffect,useState } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box } from '@mui/material'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { getConversation } from '../../service/api'
export default function ChatBox() {

  const {person,account}=useContext(AccountContext)
  const [conversation,setConversation]=useState({});

  useEffect(()=>{
    const getConversationDetails=async()=>{
      let data=await getConversation({senderId:account.sub,receiverId:person.sub})
      setConversation(data)
    }
    getConversationDetails();
  },[person.sub])
  return (
    <div>
      <Box style={{height:'75%'}}>
      <ChatHeader person={person}/>
      <Messages person={person} conversation={conversation}/>
      </Box>
       
    </div>
  )
}
