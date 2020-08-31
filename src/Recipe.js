import React from 'react';
import style from './recipe.module.css';


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li key={ingredient.text}> {ingredient.text} </li>
                ))}
            </ol>
            <p>Calories: {Math.floor(calories)}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;