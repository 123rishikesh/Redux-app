import React,{useEffect, useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import { useSelector,useDispatch } from 'react-redux';
import { DELETE } from '../redux/actions/productActions';
import { useNavigate, useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';


const CardDetails = () => {


    const [data, setData] = useState([]);
    const [price, setPrice] = useState(0);
    console.log(price)
    const { id } = useParams();
    const getdata = useSelector(state => state.AddtoCartReducer.carts)
    const dispatch = useDispatch();
    


    const navigate = useNavigate();

  const filterData = () => {
      let compare = getdata.filter((e) => {
          return e.id == id
      });
      setData(compare);
  }

  useEffect(()=> {
      filterData();
  },[id])

  const Delete = (id) => {
    dispatch(DELETE(id));
    navigate("/")
  }

 const totalPrice = () => {
     let price = 0;
     data.map((e) => {
        price = e.price + price
     });
     setPrice(price);
 }

 useEffect(() => {
     totalPrice()
 },[totalPrice])
 
    return(
            <>
                <Header/>
                <div className='container mt-2'>
                    <h2 className='text-center'> Items Details Page</h2>

                    <section className="container mt-3">
                        {data.map((e) => {
                            return (
                                <>
                                     <div className='item-image'>
                                         <img src={e.image} alt={e.title} style={{minwidth: '8rem', height: '20rem'}}/>
                                         </div>

                                         <div className='details'>
                                            <Table>
                                                <tr>
                                                    <td>
                                                        <p><strong>Product Name</strong>: {e.category}</p>
                                                        <p><strong>Price</strong> : ₹{e.price}</p>
                                                        <p><strong>Total</strong> : ₹ {price}</p>
                                                        <div className='mb-3 d-flex ' style={{width: 50, height: 50, cursor: "pointer", background: "#ddd", color: "#111", position: 'absolute', right: "600px", top: "600px"}}>
                                                            <span style={{fontSize: 24}}>-</span>
                                                            <span style={{fontSize: 24}}>0</span>
                                                            <span style={{fontSize: 24}}>+</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p><strong>Rating</strong>:<span style={{background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px"}}> {e.rating.rate} * </span></p>
                                                        <p><strong>Remove : </strong><span onClick={() => Delete(e.id)}><i className="fas fa-trash" style={{ color: "red", fontSize: 20, cursor: "pointer"}}/> </span></p>
                                                    </td>
                                                </tr>
                                            </Table>
                                         </div>
                                </>
                            )
                        })}
                      
                    </section>
                </div>

              
                    <Footer/>
               
            </>
    );
}

export default CardDetails;