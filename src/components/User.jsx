import React, { useState } from 'react'

const User = (props) => {

const [istrueForImage, setIstrueForImage] = useState(false)
const [userImage, setUserImage] = useState('')
const [user, setUser] = useState('')

const fetchUser = (login) => {
    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(data => {
        setUser(data.login)
        setUserImage(data.avatar_url)
    })}



const handleClickOnUser = () => {
    fetchUser(props.user.login)
    setIstrueForImage(!istrueForImage)
}

  return (
    <div>
        <li className='fetchUsers-list-element' onClick={handleClickOnUser}>{props.user.login}</li>
        {istrueForImage? <img className='user-image' src={userImage} alt={user}/> : ""}
    </div>
    
  )
} 



export default User