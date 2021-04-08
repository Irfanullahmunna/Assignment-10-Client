import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ProductContext, UserContext } from '../../App';

const Checkout = () => {
    const [user, setUser] = useContext(UserContext);
    const [product, setProduct] = useContext(ProductContext);
    product.email = user.email;
    setProduct(product);
    const handleAddOrder = () => {
        fetch(`https://lit-sierra-38855.herokuapp.com/addOrder/${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => console.log('server side response', res))

    }
    const { name } = useParams();
    return (
        <div className="container">
            <h2>Checkout</h2>
            <p></p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{name}</td>
                        <td>1</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </Table>
        <div  style={{textAlign:"end"}}>
        <Button onClick={handleAddOrder} as={Link} to={`/person/${user.email}`}>Checkout</Button>
        </div>
        </div>
    );
};

export default Checkout;