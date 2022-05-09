import React from 'react'
import './Header.css'

const Footer = () => {

    return (
        <div className='container-fluid' id="footer">
            <div className='row'>
                <div className='col-md-3'>
                    <ul className='list'>
                        <li>Jewellery</li>
                        <li>Clothing</li>
                        <li>Paint</li>
                        <li>shirt</li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <ul className='list'>
                        <li>Ring</li>
                        <li>Necklace</li>
                        <li>Gold bengal</li>
                        <li>Ear ring</li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <ul className='list'>
                        <li>Jeans</li>
                        <li>Laptop Bag</li>
                        <li>Shirt</li>
                        <li>Paint</li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <ul className='list'>
                        <li>India</li>
                        <li>Austrailiya</li>
                        <li>America</li>
                        <li>Canada</li>
                    </ul>
                </div>
            </div>
            <div>
                Rishikesh Bhardwaj @ Copyright.
            </div>
        </div>
    );
}

export default Footer;