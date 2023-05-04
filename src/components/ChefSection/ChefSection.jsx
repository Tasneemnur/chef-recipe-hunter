import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import Chef from '../Chef/Chef';

const ChefSection = () => {
    const {loading} = useContext(AuthContext)
    const [chefs, setChefs] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => {
            setChefs(data)
            })
        .catch(error => console.error(error))
    }, [])
    

    return (
        <div>
            <h2 className='text-center my-4 fw-bold'>Our <span className='text-danger'>Chefs</span></h2>
            <div className='row row-cols-1 row-cols-md-3 gap-3 justify-content-center'>
                {
                    loading ? <Spinner animation="border" variant="danger"></Spinner> :  chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef> )
                }
            {
               
            }
            </div>
            
        </div>
    );
};

export default ChefSection;