import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import User from './components/User'

/*Steps:
Check out this endpoint (you can open it in your browser, no API key needed): https://api.github.com/users
Each user object looks like this:

{
  "login": "mojombo",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
  "gravatar_id":
  "url": "https://api.github.com/users/mojombo", "html_url": "https://github.com/mojombo",
  "followers_url": "https://api.github.com/users/mojombo/followers",
  "following_url": "https://api.github.com/users/mojombo/following{/other_user}", "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mojombo/starred {/owner} {/repo}", "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions", "organizations_url": "https://api.github.com/users/mojombo/orgs", "repos_url": "https://api.github.com/users/mojombo/repos",
  "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mojombo/received_events", "type": "User",
  "site_admin": false
}
Create a React component that uses this API endpoint to fetch the list of users it provides

Once you have fetched the users, display their login in an ordered list on the page (<ol>).

When someone clicks on the user, show their image below the clicked user.

If time allows, create a text field input at the bottom of the list that allows you to add another user the list.*/ 

function App() {

const [users, setUsers] = useState([])
const [newUser, setNewUser] = useState('')
const [newUserImage, setNewUserImage] = useState('')
const [newUserLogin, setNewUserLogin] = useState('')
const [newUserUrl, setNewUserUrl] = useState('')
const [newUserHtmlUrl, setNewUserHtmlUrl] = useState('')
const [newUserFollowersUrl, setNewUserFollowersUrl] = useState('')
const [newUserFollowingUrl, setNewUserFollowingUrl] = useState('')
const [newUserGistsUrl, setNewUserGistsUrl] = useState('')
const [newUserStarredUrl, setNewUserStarredUrl] = useState('')
const [newUserSubscriptionsUrl, setNewUserSubscriptionsUrl] = useState('')
const [newUserOrganizationsUrl, setNewUserOrganizationsUrl] = useState('')
const [newUserReposUrl, setNewUserReposUrl] = useState('')
const [newUserEventsUrl, setNewUserEventsUrl] = useState('')
const [newUserReceivedEventsUrl, setNewUserReceivedEventsUrl] = useState('')
const [newUserType, setNewUserType] = useState('')
const [newUserSiteAdmin, setNewUserSiteAdmin] = useState('')
const [newUserNodeId, setNewUserNodeId] = useState('')
const [istrueForImage, setIstrueForImage] = useState()


const fetchUsers = () => {
  fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
}



const fetchNewUser = () => {
  fetch(`https://api.github.com/users/${newUser}`)
  .then(response => response.json())
  .then(data => {
    setNewUserLogin(newUser)
    setNewUserImage(data.avatar_url)
    setNewUserUrl(data.url)
    setNewUserHtmlUrl(data.html_url)
    setNewUserFollowersUrl(data.followers_url)
    setNewUserFollowingUrl(data.following_url)
    setNewUserGistsUrl(data.gists_url)
    setNewUserStarredUrl(data.starred_url)
    setNewUserSubscriptionsUrl(data.subscriptions_url)
    setNewUserOrganizationsUrl(data.organizations_url)
    setNewUserReposUrl(data.repos_url)
    setNewUserEventsUrl(data.events_url)
    setNewUserReceivedEventsUrl(data.received_events_url)
    setNewUserType(data.type)
    setNewUserSiteAdmin(data.site_admin)
    setNewUserNodeId(data.node_id)
  })

  
  setUsers([...users, newUser])
  

}


  return (
    <ol className="App">
      <button className='fetchUsers-button' onClick={fetchUsers}>Fetch Users</button>
      
      
      {users.map((user) => {
        return (
          <User
            key={user.id}
            user={user}
            login={user.login}
          />
        )
      })}

      <input className='new-user-input' id='new-user-input' type="text" value={newUser} onChange={(e) => setNewUser(document.getElementById('new-user-input').value)} placeholder="New User" />
      <button className='new-user-button' onClick={fetchNewUser}>Fetch New User</button>
      <div className='new-user-info'>
        <img src={newUserImage} alt={newUserLogin} />
        <p>{newUserLogin}</p>
        <p>{newUserUrl}</p>
        <p>{newUserHtmlUrl}</p>
        <p>{newUserFollowersUrl}</p>
        <p>{newUserFollowingUrl}</p>
        <p>{newUserGistsUrl}</p>
        <p>{newUserStarredUrl}</p>
        <p>{newUserSubscriptionsUrl}</p>
        <p>{newUserOrganizationsUrl}</p>
        <p>{newUserReposUrl}</p>
        <p>{newUserEventsUrl}</p>
        <p>{newUserReceivedEventsUrl}</p>
        <p>{newUserType}</p>
        <p>{newUserSiteAdmin}</p>
        <p>{newUserNodeId}</p>

      </div>

    </ol>
  )
}

export default App
