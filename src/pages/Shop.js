import React, {useContext, useEffect} from 'react';
// mobx
import {observer} from "mobx-react-lite";
// bootstrap
import {Col, Container, Row} from "react-bootstrap";
// components
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
// contexts
import {Context} from "../index";
// API
import {getBrands, getDevices, getTypes} from "../http/deviceApi";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        getTypes().then(dataTypes => device.setTypes(dataTypes))
        getBrands().then(dataBrands => device.setBrands(dataBrands))
        getDevices(null, null, 1, 2).then(dataDevices => {
            device.setDevices(dataDevices.rows)
            device.setTotalCount(dataDevices.count)
        })
    }, [])

    useEffect(() => {
        getDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then(dataDevices => {
            device.setDevices(dataDevices.rows)
            device.setTotalCount(dataDevices.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
})

export default Shop;