import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Card from './Card';

const Detail = () => {
    const [meals, setMeals] = useState(null);
    const params = useParams();
    const categoryname = params.categoryName;

    const fetchData = async(category) => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryname}`);
        const result = await data.json();
        setMeals(result.meals);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h3>{categoryname} Page</h3>
            {
                meals && meals.length > 0  ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            meals.map(meal => (
                                <Card key={ meal.idMeal } imageSource={ meal.strMealThumb } title={ meal.strMeal } />
                            ))
                        }
                    </div>
                ) : (
                    <p>Loading ...</p>
                )
            }
        </div>
    )
}

export default Detail
