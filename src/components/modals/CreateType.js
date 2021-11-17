import React, {useState} from 'react';
// bootstrap
import {Button, Form, Modal} from "react-bootstrap";
// API
import {createType} from "../../http/deviceApi";

const CreateType = ({show, onHide}) => {
    const [nameType, setNameType] = useState('')

    const addType = () => {
        if(nameType) createType({name: nameType}).then(() => {
            setNameType('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header>
                <Modal.Title>
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={nameType}
                        onChange={e => setNameType(e.target.value)}
                        placeholder="Введите название типа"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;