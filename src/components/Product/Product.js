import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext, UserContext } from '../../App';

const Product = (props) => {
    const [product, setProduct] = useContext(ProductContext);
    const [user, setUser] = useContext(UserContext);
    const date = new Date().toDateString()
    const productAddHandler = () => {
        props.product.email = user.email;
        props.product.date = date;
        setProduct(props.product);
        console.log(props.product);
    }
    const { name, imageURL, price } = props.product;
    return (
        <div className="">
            <div style={{ border: '2px solid black', borderRadius: '5px', paddingBottom: '10px' }} className="text-center">
                <img style={{ width: "100%" }} src={imageURL} alt="" />
                <h5>{name}</h5>
                <div className="d-flex justify-content-around align-center">
                    <h4>{price}</h4>
                    <Button as={Link} to={`/checkout/${name}`} onClick={productAddHandler} >Buy Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Product;