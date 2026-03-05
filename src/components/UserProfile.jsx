import React, {useState, useEffect} from 'react'

const UserProfile = () => {
    const [user,setUser] = useState(null);

   useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then((res) => res.json())
        .then((data) => setUser(data))

    },[])
  return (
    <div>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
    </div>
  )
}

export default UserProfile