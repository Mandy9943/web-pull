import React, { useState } from "react";
import Select from '../Common/SelectDropdown/Select';


export default function SelectVariant({dimensions, select, name}) {
    return (
        <Select
            onSelect={(value, available) => {
                select({
                    name,
                    value: value,
                    available: available,
                });
            }}
            items={dimensions}
            showDefault={true}
        />
    )
}