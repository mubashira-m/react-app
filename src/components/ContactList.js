import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function ContactList(props) {
  const {contact,removeContact} = props
const contactList=contact.map((val)=>{
  return(
    <div className='contacts'> 
    <div className='user'> 
    <div className='icon'><AccountCircleIcon/></div>
    <div><div >
          {val.data.name}
      </div>
      <div className='email'>{val.data.email}</div></div>
    </div>
      <span onClick={()=>removeContact(val.id)} className='icon'><DeleteIcon /></span>
    </div>
  )
})
  return (
  
    <><div>{contactList}</div></>
    
   
  )
}

export default ContactList