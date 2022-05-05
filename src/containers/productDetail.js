import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { viewProductDetail } from '../redux/actions/productActions';
import Footer from './Footer'
import Header from './Header';
import Loader from './Loader';
import './productComponent.css';

const ProductDetail = () => {


    const [loader, setLoader] = useState(true)
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    const { productId } = useParams();
   
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch((error) => { console.log(error) })

        dispatch(viewProductDetail(response.data))
        setLoader(false)
    }

    useEffect(() => {
        if (productId && productId !== " ")
            fetchProductDetail()

    }, [productId])
    return (
        <div className='container-fluid'>
            <div className='row'>
                <Header />
            </div>
            {loader ? <div className="d-flex justify-content-center"><Loader /></div> :
                <div className='row' style={{ marginTop: '40px' }}>
                    <div className='col-sm6'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src={image} alt={title} />
                            </div>
                            <div>{title}</div>
                            <div>{price}</div>
                            <div>{category}</div>
                            <div>{description}</div>
                        </div>
                    </div>

                </div>}
            <div className='row' style={{ marginTop: '5%' }}> <Footer /></div>
        </div>
    );

};

export default ProductDetail;