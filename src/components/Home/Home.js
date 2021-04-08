import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://lit-sierra-38855.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (

        <div style={{marginBottom:"5%"}} className="container">
            <div style={{ margin:"0 20%"}}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Medicine Name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text style={{backgroundColor:"tomato", color: 'white'}} id="basic-addon2">Search</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <div className="text-center pt-2">
                {products.length === 0 && <Spinner animation="border" variant="danger" />}
            </div>
            <div style={{ margin: '0 auto' }} className="container text-center row cols row-cols-md-4 cols-sm-1 gy-2">

                {
                    products.map(pd => <Product key={pd._id} product={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;