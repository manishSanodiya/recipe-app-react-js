import React, { useState } from 'react'
import './components.css';
import { FaSearch } from 'react-icons/fa';
import {useNavigate } from 'react-router-dom';

const Search = () => {
    const [input,setInput] = useState('');

    const navigate = useNavigate();


    const submitHandler=(e)=>{
      e.preventDefault();
     navigate("/searched/"+input);
    }

  return (
    <form className='form' onSubmit={submitHandler}>
        <FaSearch className='formsvg'/>
    
        <input className='forminput' type="text" onChange={(e)=> setInput(e.target.value)} placeholder='Search Dishes' value={input}/>
        
    </form>
  )
}


export default Search
