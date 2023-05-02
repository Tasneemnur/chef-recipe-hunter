import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h2 className='text-center my-5 fw-bold'>Our <span className='text-danger'>Chefs</span></h2>
            <div className='row row-cols-1 row-cols-md-3 gap-3 justify-content-center'>
            {
                chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef> )
            }
            </div>
            
        </div>
    );
};

export default ChefSection;