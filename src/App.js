import React, {useContext, useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
// mobx
import {observer} from "mobx-react-lite";
// components
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
// contexts
import {Context} from "./index";
import {auth} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        auth().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if(loading) {
        return <Spinner animation="grow"/>
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
