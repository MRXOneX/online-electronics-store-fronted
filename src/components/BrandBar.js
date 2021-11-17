import React, {useContext} from 'react';
// mobx
import {observer} from "mobx-react-lite";
// bootstrap
import {Card} from "react-bootstrap";
// contexts
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)


    return (
        <div className="d-flex mt-3">
            {device.brands.map((brand, index) => (
                <Card
                    style={{cursor: 'pointer'}}
                    border={brand.id === device.selectedBrand.id ? 'primary': 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={`${brand.id}_${index}`}
                    className="px-3 py-2">
                    {brand.name}
                </Card>
            ))}
        </div>
    );
})

export default BrandBar;