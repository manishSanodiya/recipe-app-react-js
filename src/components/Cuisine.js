
import { useParams,Link } from "react-router-dom";

import { useEffect, useState } from "react";
import './components.css'



const API_KEY = process.env.REACT_APP_API_KEY

const Cuisine = () => {
    const [cuisine,setCuisine] = useState([])

    let params = useParams();


    const GetCuisine = async(name)=>{
        try{
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`);
            const recipes =await data.json();
            setCuisine(recipes.results);
        }catch(err){
            console.error("ERROR: -" , err);
        }
     
    }
    
    useEffect(()=>{
        GetCuisine(params.type)
        
    },[params.type])


  return (
    <div className="Grid">
        {cuisine.map((item)=>{
            return( <div className="Card" key={item.id}>
                <Link className="link" to={'/recipe/'+item.id}>
                <img className="cardimage" src={item.image} />
                <h3 className="cardh4">{item.title}</h3>
                </Link>
            </div>)
            
        })}
    </div>
  )
}







export default Cuisine