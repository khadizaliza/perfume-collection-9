
import React, { useEffect, useState } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])
    return (
        <div>
        <h1>Customer Reviews {reviews.length}</h1>
        <div className='reviewcart'>
        {
            reviews.map(review => <ReviewCart key={review.name} review={review}></ReviewCart>)
        }

        </div>
        <div className='review-btn'>
            <button>See all reviews</button>
        </div>
        
        </div>
    );
};

export default Reviews;











