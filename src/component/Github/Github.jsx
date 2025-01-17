import {useEffect, useState }from 'react'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
   // const [ data, setData]  = useState([])
    
    // useEffect(() =>{
    //   fetch('https://api.github.com/users/bhupendragariya')
    //   .then(response => response.json())
    //   .then ( data => { console.log(data);
    //     setData(data)
  
    //   })
  
    // },[])
  
    return (
      <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl grid items-center'>
          Github followers: {data.followers}
          <img src={data.avatar_url} alt=" git picture"  />
          <div>{data.login}</div>
        
      </div>
    )
  }
  
  
  export const githubInfoLoader = async () => {
    const  response = await fetch('https://api.github.com/users/bhupendragariya')
    return response.json()
    
  }


 

 