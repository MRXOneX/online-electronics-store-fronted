import React, {useContext, useState} from 'react';
// mobx
import {observer} from "mobx-react-lite";
// bootstrap
import {Button, Container} from "react-bootstrap";
// components
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
// contexts
import {Context} from "../index";

const Admin = observer(() => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    const {user} = useContext(Context)
    console.log(user.user)

    return (
        <Container className="d-flex flex-column">
            {user.user.role === 'ADMIN' ?
                <>
                    <Button variant="dark" className='mt-5' onClick={() => setTypeVisible(true)}>Добавить тип</Button>
                    <Button variant="dark" className='mt-5' onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
                    <Button variant="dark" className='mt-5' onClick={() => setDeviceVisible(true)}>Добавить устройство</Button>


                    <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
                    <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
                    <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
                </>
            : <p>У вас нет доступа</p>
                }
        </Container>
    );
})

export default Admin;