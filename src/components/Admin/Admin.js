import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import ManageProducts from '../ManageProducts';
import AddProducts from './AddProducts/AddProducts';

const Admin = () => {
    return (
        <div  className="container pt-2">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col style={{backgroundColor: 'lightBlue'}} sm={3}>
                        <Nav  variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Add Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Manage Products</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane  eventKey="first">
                                <AddProducts />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ManageProducts />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default Admin;