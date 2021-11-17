import React, {useContext} from 'react';
// routes
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
// bootstrap
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
// contexts
import {Context} from "../index";
// utils
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";

const Navbar = observer(() => {
    const {user} = useContext(Context)

    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Container>
                <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <div className="navbar-nav" style={{color: 'white'}}>
                        <Button variant='outline-info' onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button
                            variant='outline-info'
                            style={{marginLeft: '8px'}}
                            onClick={() => {
                                navigate(LOGIN_ROUTE)
                                user.setIsAuth(false)
                            }}
                        >Выйти</Button>
                    </div>
                    :
                    <div className="navbar-nav" style={{color: 'white'}}>
                        <Button variant='outline-info' onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </div>
                }
            </Container>
        </nav>
    );
})

export default Navbar;