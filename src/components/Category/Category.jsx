import React, { useState, useEffect } from 'react';

const Category = props => {
    const { category } = props.match.params;
    
    useEffect(() =>{
        console.log("Mounting");
    });
    return (
        <div>
            <h1>{category}</h1>
        </div>
    );
};

export default Category;