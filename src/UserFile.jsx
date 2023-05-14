import React, { useEffect, useState } from 'react'
import axios from'axios'


const UserFile = () => {
  const[posts, setPosts] = useState([])
  useEffect( ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=> {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])   
  const style ={color:'red',}
  return (
    <div>
      <h1 style={style}>List names of users</h1>
    <div className='container'>
      <ul className='names'>
        {posts.map(post=>{
        return  <li key={post.id} > {post.name} </li>
        })}
      </ul>
    </div>
    </div>
  )
}

export default UserFile