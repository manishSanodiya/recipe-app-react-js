import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../store/FavSlice";
import { Link } from "react-router-dom";
import './components.css';

const Favourite = () => {
  const [dishes, setDishes] = useState([]);
//    const dispatch = useDispatch();

  // const select = useSelector((state)=> state.favourite)

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const check = localStorage.getItem("fav");
    console.log(JSON.parse(check))
       
    setDishes(JSON.parse(check));
 
  };

  return (
    <div className="Grid">
         {dishes && 
            dishes.map((item)=>{
                return(
                    <div className="Card" key={item.id}>
                          <Link className="link" to={'/recipe/'+item.id}>
                          <h3 className="cardh4">{item.title}</h3>
                          <img className="cardimage" src={item.image} />
                
                        </Link>
                    </div>
                )
            })

         }
        <div>
        {!dishes && <h2>NO FAVOURITE Dishes SELECTED</h2>}
        </div>
    
    </div>
  );
};

export default Favourite;
