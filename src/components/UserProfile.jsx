import React, {useState, useEffect} from 'react'

const UserProfile = ({userId=4}) => {
    const [user,setUser] = useState(null);

   useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data))

    },[userId])
  return (
    <div>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
    </div>
  )
}

export default UserProfile