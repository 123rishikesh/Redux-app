import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './productComponent.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';
import { ADD } from '../redux/actions/productActions'
import { Toast } from 'react-bootstrap';


const ProductComponent = ({ loader }) => {

    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);

    const allProducts = useSelector(state => state.allProducts.products);

    const [products, setProducts] = useState([...allProducts]);

    const [id, setId] = useState('electronics')

    const dispatch = useDispatch();

    useEffect(() => {
        setProducts([...allProducts]);
    }, [allProducts]);

    /**
     * Function to sort by price
     * QA camelCase is not followed in all cases
     */
    const priceHightolow = () => {
        setProducts([...products.sort((a, b) => b.price - a.price)]);
    }

    const priceLowtohigh = () => {
        setProducts([...products.sort((a, b) => a.price - b.price)]);
    }

    const filterProducts = (search) => {
        if (search !== "") {
            setProducts([...products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()))]);
        } else {
            setProducts(allProducts)
        }
    }

    const fetchproduct = (event) => {
        const x = event.target.id;
        setId(x);

        switch (x) {
            case 'electronics':
                setProducts([...products.filter(p => p.category.toLowerCase().includes('electronics'))])

                break;
            case 'jewelery':
                setProducts([...products.filter(p => p.category.toLowerCase().includes('jewelery'))])

                break;
            case 'clothing':
                setProducts([...products.filter(p => p.category.toLowerCase().includes("men's clothing"))])

                break;
            default:
                console.log("Nothing to do")
        }

    }

    useEffect(() => {
        setProducts([...allProducts]);
    }, [id]);

    useEffect(() => {
        filterProducts(search);
    }, [search]);


    const send = (eve) => {
        dispatch(ADD(eve));
        setShow(true);
        console.log(eve.id);
    }

    return (
        <>

            <Header search={search} setSearch={setSearch} priceHightolow={priceHightolow} priceLowtohigh={priceLowtohigh} fetchproduct={fetchproduct} />
            <p className='container sticky-top ' style={{ position: "fixed", left: "500px", top: "115px" }} >
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide className="border border-success rounded text-primary my-3 h2 ">

                    <Toast.Body className="bg-info p-0">Item is Added to the Cart.</Toast.Body>
                </Toast>
            </p>

            {loader ? <div className="d-flex justify-content-center"><Loader /></div> :
                products && products.map(product => {
                    const { id, category, title, price, image } = product;
                    return (

                        <div key={id} className='col-sm-4'>

                            {/* <Link to={`/product/${id}`}> */}
                            <div key={id}>
                                <div className='card' >
                                    <div className='card-image'>
                                        <img src={image} alt={title} />
                                    </div>
                                    <div className='content'>
                                        <div className='header'>{title}Title</div>
                                        <div className='meta price'>${price}</div>
                                        <div className='meta'>{category}</div>
                                    </div>
                                    <button type="button" className='btn btn-primary mx-5' onClick={() => send(product)}>Add to Cart</button>

                                </div>
                            </div>
                            {/* </Link> */}
                        </div>
                    )
                })}
            <Footer />
        </>
    )
}

export default ProductComponent;