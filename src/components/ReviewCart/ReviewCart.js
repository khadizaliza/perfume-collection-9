
import React from 'react';
import './ReviewCart.css'

const ReviewCart = (props) => {
    const {name,text, rating, picture} = props.review;
    return (
        <div className='review'>
            <img src={picture} alt="" />
            <h2>Name: {name}</h2>
            <h3>Review: {text}</h3>
            <h4>Rating: {rating}</h4>
            
        </div>
        
    );
};

export default ReviewCart;








