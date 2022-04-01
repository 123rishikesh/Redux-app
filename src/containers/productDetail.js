import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {

    const product = useSelector((state) => state.product);
    const {image, title, price, category,description} = product;
    const dispatch = useDispatch();
    const {productId} = useParams();
    console.log(productId)
    console.log(product)

    const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((error) => {console.log(error)})
      
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if(productId && productId !== " ")
        fetchProductDetail()
        
    },[productId])
    return (
        <div className='row' style={{marginTop:'40px'}}>
           <div className='col-sm6'>
               <div className='card'>
                    <div className='card-image'>
                        <img src={image} alt={title}/>
                    </div>
                    <div>{title}</div>
                    <div>{price}</div>
                    <div>{category}</div>
                    <div>{description}</div>
               </div>
           </div>
        </div>
        );

};

export default ProductDetail;