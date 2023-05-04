import React from 'react';
import { Image } from 'react-bootstrap';
import appetizers from "../../assets/appe.jpg"
import beef from "../../assets/beef.jpeg"
import chicken from "../../assets/chick.jpeg"
import Vegetarian from "../../assets/vege.jpeg"
import dessert from "../../assets/dessert.jpg"


const FoodCategory = () => {
    return (
        <div className='py-5'>
             <h2 className='text-center my-5 fw-bold'>Recipe <span className='text-danger'>Categories</span></h2>
             <div className='row row-cols-2 row-cols-md-5'>
             <div>
                <img src={appetizers} alt="" srcset="" style={{height:"170px", width:"170px"}} className='rounded-circle' />
                <h4 className='text-center my-3 text-muted'>Appetizers</h4>
             </div>
             <div>
                <img src={beef} alt="" srcset="" style={{height:"170px", width:"170px"}} className='rounded-circle' />
                <h4 className='text-center my-3 text-muted'>Beef</h4>
             </div>
             <div>
                <img src={chicken} alt="" srcset="" style={{height:"180px", width:"180px"}} className='rounded-circle'/>
                <h4 className='text-center my-3 text-muted'>Chicken</h4>
             </div>
             <div>
                <img src={Vegetarian} alt="" srcset="" style={{height:"170px", width:"170px"}} className='rounded-circle' />
                <h4 className='text-center my-3 text-muted'>Vegetarian</h4>
             </div>
             <div>
                <img src={dessert} alt="" srcset="" style={{height:"170px", width:"170px"}} className='rounded-circle' />
                <h4 className='text-center my-3 text-muted'>Desserts</h4>
             </div>
             </div>
             
        </div>
    );
};

export default FoodCategory;