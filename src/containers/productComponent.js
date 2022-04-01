import React from 'react'
import { useSelector } from 'react-redux';
import './productComponent.css'
import {Link} from 'react-router-dom';


const ProductComponent = () => {

    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map((product) => {
    const {id, title, price, image, category} = product;
        return(
            <div className='row'  key={id}>
            <div className='col-4'>
            <Link to={`/product/${id}`}>
            <div >
               <div className='card' >
                   <div className='card-image'>
                       <img src={image} alt={title}/>
                   </div>
                       <div className='content'>
                           <div className='header'>{title}</div>
                           <div className='meta price'>${price}</div>
                           <div className='meta'>{category}</div>
                       </div>
                  
               </div>
            </div>
            </Link>
           </div>
           <div className='col-4'></div>
           <div className='col-4'>hello</div>
           </div>
    )
})
   
return(
<>
    {renderList}
</>
);

};

export default ProductComponent;