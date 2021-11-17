import React, {useContext} from 'react';
// mobx
import {observer} from "mobx-react-lite";
// contexts
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ul className="list-group mt-3">
            {device.types.map((type, index) => (
                <li
                    key={`${type.id}_${index}`}
                    style={type.id === device.selectedType.id
                        ? {backgroundColor: 'blue', color: 'white', cursor: 'pointer'}
                        : {cursor: 'pointer'}}
                    onClick={() => device.setSelectedType(type)}
                    className="list-group-item">
                    {type.name}
                </li>
            ))}
        </ul>
    );
});

export default TypeBar;