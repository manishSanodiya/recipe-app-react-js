import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {useState,useEffect} from "react"
import "./pages.css";

const API_KEY = process.env.REACT_APP_API_KEY

const Searched = () => {
    const [serch,setSearch] = useState([])

    let params = useParams();


    const GetCuisine = async(name)=>{
      try{  const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`);
        const recipes =await data.json();
        setSearch(recipes.results);
    }catch(err){
        console.error("ERROR: -" , err);
    }
    }
    
    useEffect(()=>{
        GetCuisine(params.search)
        console.log(params.search);
    },[params.search])
  return (
    <div className='grid'>
    {serch.map((item)=>{
        return <div className='card' key={item.id}>
            <Link to={'/recipe/'+item.id}>
            <img src={item.image} />
            <h4>{item.title}</h4>
            </Link>
        </div>
    })}
</div>
)
}


export default Searched