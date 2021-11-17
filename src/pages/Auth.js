import React, {useContext, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
// mobx
import {observer} from "mobx-react-lite";
// bootstrap
import {Button, Card, Container, Form, Row} from "react-bootstrap";
// userAPI
import {login, register} from "../http/userAPI";
// contexts
import {Context} from "../index";
// utils
import {LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE} from "../utils/consts";


const Auth = observer(() => {
    const {user} = useContext(Context)

    const location = useLocation()

    const isLogin = location.pathname !== REGISTER_ROUTE



    return (
        <Container
            style={{height: window.innerHeight - 54}}
            className="d-flex justify-content-center align-items-center">
            {isLogin ? <Login user={user}/> : <Register user={user}/>}
        </Container>
    );
})

const Login = ({user}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleLogin = async () => {
        await login(email, password).then(data => {
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }).catch(e => alert(e.response.data.message))
    }

    return (
        <Card style={{width: 600}} className="p-5">
            <h2 className='m-auto'>Авторизация</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='mt-3'
                    placeholder="Введите ваш email..."
                    type="email"
                />
                <Form.Control
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='mt-3'
                    placeholder="Введите ваш пароль..."
                    type="password"
                />
                <Row className='d-flex justify-content-between px-3'>
                    <Button
                        onClick={handleLogin}
                        variant="outline-success"
                        className="mt-3">
                        Войти
                    </Button>
                    <div>
                        Нет аккаунта? <NavLink to={REGISTER_ROUTE}>Зарегистрируйтесь</NavLink>
                    </div>
                </Row>
            </Form>
        </Card>
    )
}


const Register = ({user}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleRegister = async () => {
        await register(email, password).then(data => {
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }).catch(e => alert(e.response.data.message))
    }

    return (
        <Card style={{width: 600}} className="p-5">
            <h2 className='m-auto'>Регистрация</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='mt-3'
                    placeholder="Введите ваш email..."
                    type="email"
                />
                <Form.Control
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='mt-3'
                    placeholder="Введите ваш пароль..."
                    type='password'
                />
                <Row className='d-flex justify-content-between px-3'>
                    <Button
                        onClick={handleRegister}
                        variant="outline-success"
                        className="mt-3">
                        Зарегистрироваться
                    </Button>
                    <div>
                        Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                    </div>
                </Row>
            </Form>
        </Card>
    )
}


export default Auth;