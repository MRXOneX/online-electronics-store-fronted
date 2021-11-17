import React, {useContext} from 'react';
// mobx
import {observer} from "mobx-react-lite";
// bootstrap
import {Row} from "react-bootstrap";
// contexts
import {Context} from "../index";
// components
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.devices.map((device, index) => (
                <DeviceItem key={`${device.id}_${index}`} device={device}/>
            ))}
        </Row>
    );
});

export default DeviceList;