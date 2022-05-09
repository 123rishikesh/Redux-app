import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './productComponent';
import axios from 'axios';
import { getProducts } from '../redux/actions/productActions'

const ProductListing = () => {


    const [loader, setLoader] = useState(true);
    const products = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {

        const response = await axios.get('https://fakestoreapi.com/products')
            .then(res => { dispatch(getProducts(res.data)); })
            .catch((err) => {
                console.log("Error", err);
            });
        setLoader(false)
    };

    useEffect(() => { fetchProducts() }, []);

    return (
        <div className="container-fluid">
            <div className='row'>
                <ProductComponent loader={loader} />
            </div>
        </div>
    );

};

export default ProductListing;