import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/deviceApi";

const CreateBrand = ({show, onHide}) => {
    const [nameBrand, setNameBrand] = useState('')

    const addBrand = () => {
        if(nameBrand) createBrand({name: nameBrand}).then(() => {
            setNameBrand('')
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
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={nameBrand}
                        onChange={e => setNameBrand(e.target.value)}
                        placeholder="Введите название бренд"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;