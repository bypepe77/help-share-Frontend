import React, { useState } from 'react';

const Category = props => {
    const { category } = props.match.params;
    console.log("user", category);
    useEffect(() =>{
        console.log("Mounting");
    });
    return (
        <div>
            
        </div>
    );
};

export default Category;