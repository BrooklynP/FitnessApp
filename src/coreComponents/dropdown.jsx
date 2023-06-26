import React from 'react';

function DropDown({values, id, name, onChangeFunction}) {
    const optionsList = values.map((option, index) =>
        <option key={index} value={option.id}>{option.name}</option>
    )

    return (
      <select name={name} id={id} onChange={onChangeFunction}>
        {optionsList}
      </select>
    );
}

export default DropDown;