import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pages.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../store/FavSlice";

const API_KEY = process.env.REACT_APP_API_KEY;

const Recipe = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [active, setActive] = useState("instructions");

  const select = useSelector((state) => state.favourite);

  const [details, setDetails] = useState({});

  const fetchRecipe = async () => {
   try{ const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=568227dc55604dd8aa984e51c883b7ea`
    );
    const detailData = await data.json();

    setDetails(detailData);
  }catch(err){
    console.error("ERROR: -",err);
  }
  };

  const FavouriteHandler = (item) => {
    dispatch(storeData(item));

   
  };
  localStorage.setItem("fav", JSON.stringify(select));

  useEffect(() => {
    fetchRecipe();
  }, [params.name]);
  return (
    <div className="detailwrapper">
      <div>
        <h2 className="detailh2">{details.title}</h2>
        <img src={details.image} className="detail-image" alt="detail image" />
      </div>
      <div className="info">
        <button
          className={active === "instructions" ? "active" : "button"}
          onClick={() => setActive("instructions")}
        >
          instructions
        </button>
        <button
          className={active === "ingredients" ? "active" : "button"}
          onClick={() => setActive("ingredients")}
        >
          ingredients
        </button>

        {active === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {active === "ingredients" && (
          <div>
            <ul className="detailul">
              <h2>Ingredients</h2>
              {details.extendedIngredients.map((item) => {
                return (
                  <li className="detailli" key={item.id}>
                    {item.original}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <button className="button" onClick={() => FavouriteHandler(details)}>
          Add To Favourite
        </button>
      </div>
    </div>
  );
};

export default Recipe;
