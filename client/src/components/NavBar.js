import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav.Link style={{color: "white", fontWeight: "bold"}} to={SHOP_ROUTE}>S-Cloud Store</Nav.Link>
                <Nav className="ml-auto" style={{color: "white"}}>
                    <Button variant={"outline-light"}>Авторизация</Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;