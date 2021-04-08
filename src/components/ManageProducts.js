import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { EachProductContext } from '../App';
import EachProduct from './Admin/EachProduct';
import Product from './Product/Product';

const ManageProducts = (props) => {
    const deleteProduct = (id) => {
        fetch(`https://lit-sierra-38855.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
            })
    }
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://lit-sierra-38855.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div className="text-center">
            <h3>Manage Products</h3>
            
            <Table striped bordered hover>
            <thead>
                <tr style={{fontSize:"1.2em"}}>
                    <th>Product Name</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
                <tbody>
            
                {
                    products.map(pd => <EachProduct product={pd}></EachProduct>)
                }
                 </tbody>
            </Table>
            
        </div>
    );
};

export default ManageProducts;