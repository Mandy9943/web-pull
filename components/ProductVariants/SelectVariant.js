import React, { useState } from "react";
import Select from '../Common/SelectDropdown/Select';


export default function SelectVariant({dimensions, select, name}) {

    function onSelect(value, available) {
        select({
            name,
            value: value,
            available: available,
        });
    }

    return (
        <Select
            onSelect={onSelect}
            items={dimensions}
        />
    )
}