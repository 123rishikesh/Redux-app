import React, { useState, useEffect } from 'react'
import './Header.css';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { DropdownButton, Dropdown, Table, thead, tbody } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { DELETE } from '../redux/actions/productActions';
import cartimage from '../assets/cart.gif'



const Header = (prop) => {

    const [price, setPrice] = useState(0);
    const { search, setSearch, priceLowtohigh, priceHightolow, fetchproduct, test } = prop;
    const getdata = useSelector(state => state.AddtoCartReducer.carts)
    const dispatch = useDispatch();



    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const totalPrice = () => {
        let price = 0;
        getdata.map((e) => {
            price = e.price + price;
        });
        setPrice(price);
    }

    useEffect(() => {
        totalPrice()
    }, [totalPrice])




    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark text-white sticky-top">
                <div className='container-fluid'>
                    <ul className="navbar nav me-auto">
                        <li className="nav-item"> <h2>Shop For All</h2></li>
                    </ul>
                    <form className='d-flex'>
                        <DropdownButton title="All">
                            <Dropdown.Item onClick={priceLowtohigh}>price-Low to high</Dropdown.Item>
                            <Dropdown.Item onClick={priceHightolow}>price-High to Low</Dropdown.Item>
                        </DropdownButton>

                        <input type="text" className="form-control me-2" placeholder='Search for products' onChange={(event) => { setSearch(event.target.value) }} />
                        <button type="button" className="btn btn-primary">Search</button>

                    </form>
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-white ms-3" style={{ fontsize: "25", cursor: "pointer" }}></i>
                    </Badge>


                </div>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className='card-details' style={{ width: '24rem', padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Product Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((element) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td><NavLink to={`/cart/${element.id}`} onClick={handleClose}><img src={element.image} style={{ width: '5rem', height: '5rem' }} alt="my image" /></NavLink></td>
                                                            <td>
                                                                <p>{element.category}</p>
                                                                <p>Price: ₹{element.price}</p>
                                                                <p>Rating: {element.rating.rate}</p>
                                                                {/* <p style={{color: 'red', fontSize: 20, cursor: "pointer"}}>
                                                        <i className='fas fa-trash smalltrash'/>
                                                    </p> */}
                                                            </td>
                                                            <td className='mt-3' style={{ color: 'red', fontSize: 20, cursor: "pointer" }} onClick={() => dispatch(DELETE(element.id))}>
                                                                <i className='fas fa-trash largetrash' />
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className="text-center">Total : ₹ {price}</p>
                                    </tbody>
                                </Table>
                            </div> :

                            <div className='card_details d-flex align-items-center' style={{ width: "17rem" }}>
                                <i className='fas fa-close smallclose' onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} />
                                <p style={{ fontSize: 22 }}> Your Cart is empty.</p>
                                <img src={cartimage} alt="No image" className="emptycart_img" style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }



                </Menu>

            </nav>

            {test ?  <nav className="navbar navbar-expand-sm bg-warning text-white mb-3 font-weight-bold">
                        <div className="container-fluid">
                            <ul className="navbar-nav">
                                <li className="nav-item" >
                            <NavLink to="/" className="nav-link" > Back </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav> :

            <nav className="navbar navbar-expand-sm bg-warning text-white mb-3 font-weight-bold">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item" >
                            <NavLink to="/electronics" className="nav-link" >Electronics</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink to="jewelery" className="nav-link" >Jewellery</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink to="clothing" className="nav-link" >Clothing</NavLink>
                        </li>
                        {/* <li className="nav-item" >
                            <a className="nav-link" href="#">Add to Cart</a>
                        </li> */}
                    </ul>
                </div>
            </nav>}
        </>
    );

}

export default Header;