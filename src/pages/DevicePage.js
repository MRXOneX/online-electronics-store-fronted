import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
// bootstrap
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
// API
import {getOneDevice} from "../http/deviceApi";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})

    const {id} = useParams()

    useEffect(() => {
        getOneDevice(id).then(dataDevice => setDevice(dataDevice))
    }, [])

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={`${process.env.REACT_APP_API_URL}/${device.img}`}/>
                    <h2>{device.name}</h2>
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>rating: {device?.rating}</h2>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card border='success' className='p-3'>
                        <h3 className='text-center'>{device.price} руб</h3>
                        <Button variant='outline-dark'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
                <h1>Харастеристики</h1>
                {device.info.map((info, index) => (
                    <Row
                        key={`${info.id}_${index}`}
                        style={{
                            background: index % 2 === 0 ? 'lightgray' : 'transparent',
                            padding: '5px',
                            borderRadius: '5px'}}>
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    );
};

export default DevicePage;