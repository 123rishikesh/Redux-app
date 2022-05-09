import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import { getProducts } from '../../redux/actions/productActions';
import Header from '../Header';
import Footer from '../Footer';

const Jewelery = () => {

    const getdata = useSelector(( state => state.allProducts.products));
    const [data, setData] = useState([]);
    console.log(getdata)
    console.log(data)
    const dispatch = useDispatch();
  

    const filterData =  () => {
        console.log("inside filter data") 
    
        if( getdata.length > 0){
            console.log("inside if")
        const items=  getdata.filter( (e) => e.category.toLowerCase().includes("jewelery".toLowerCase()))
        // return items;
        setData(items)
        }
     }

    const fetchProducts = async () => {

        const response = await axios.get('https://fakestoreapi.com/products')
            .then(res => { dispatch(getProducts(res.data)); })
            .catch((err) => {
                console.log("Error", err);
            });
      
    };

    useEffect(() => { fetchProducts()  }, []);
    
    useEffect(() => { filterData()  }, [getdata]);


    return (
        <div className="container-fluid">
        <div className="row">
          <Header test={true}/>
           
            {data && data.map((e) => {
               
                return (
                    
                  
                       
                        <div key={e.id} className="col-sm-4">
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={e.image} alt="No pic"/>
                                </div>
                                <div className='card-content'>
                                <div>{e.title} </div>
                                </div>
                            </div>
                        </div>
                        
                        
                   
                    
                );
             })}
             <Footer/>
        </div>
             </div>
            )
}

export default Jewelery;