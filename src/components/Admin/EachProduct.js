import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import {  faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EachProduct = (props) => {
    const deleteProduct = (id) => {
        fetch(`https://lit-sierra-38855.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
            })
    }
    const { name, imageURL, price, _id, weight } = props.product;
    console.log(props.product);
    return (

        <tr>
            <td style={{fontWeight: "600"}}>{name}</td>
            <td>{weight}</td>
            <td>{price}</td>
            <td>
                <Button className="btn btn-danger mx-2" as={Link} to={`/delete/${_id}`} onClick={() => deleteProduct(_id)} ><FontAwesomeIcon icon={faTrashAlt} /></Button>
                <Button className="btn btn-success" as={Link} to={`/delete/${_id}`} onClick={() => deleteProduct(_id)} ><FontAwesomeIcon icon={faEdit} /></Button>
                </td>
            <Redirect
                to={{
                    pathname: `/admin`,
                    state: { from: "/login" }
                }}
            />
        </tr>


    );
};

export default EachProduct;