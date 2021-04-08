import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router';
import { EachProductContext, UserContext } from '../../App';

const Order = () => {
    const [orders, setOrders] = useContext(EachProductContext);
    const [user, setUser] = useContext(UserContext);
    const { email } = useParams();
    useEffect(() => {
        fetch(`https://lit-sierra-38855.herokuapp.com/person/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email, orders])
    
    
    return (
        <div>
            <h2 className="text-center pt-2">Your Orders</h2>
            <div style={{margin:'5% auto'}} className="container text-center row cols row-cols-md-3 cols-sm-1 gy-2">
            
            {
                orders.map(pd =>
                    <div className="text-center">
                        <Card border="dark">
                            <Card.Header><h4>{pd.name}</h4></Card.Header>
                            <Card.Body>
                                <img style={{width: '100%'}} src={pd.imageURL} alt=""/>
                                <Card.Title>{pd.price}</Card.Title>
                               <span style={{fontSize:"1.2em", fontWeight:"600"}}>Date: </span>{pd.date}
                            </Card.Body>
                        </Card>
                        <br />
                    </div>)
            }
            <Redirect
                to={{
                    pathname: `/person/${user.email}`,
                    state: { from: "/login" }
                }}
            />
        </div>
        </div>

    );
};

export default Order;