import React from 'react';
import { CustomPicker } from 'react-color'
import { EditableInput, Hue } from 'react-color/lib/components/common'

const MyColorPicker = ({ hex, hsl, onChange }) => {
    
    const styles = {
        hue: {
            height: 10,
            position: 'relative',
            marginBottom: 10,
        },
        input: {
            height: 34,
            border: `1px solid ${ hex }`,
            paddingLeft: 10,
        },
        swatch: {
            width: 38,
            height: 38,
            background: hex,
        },
        swatch1: {
            width: 38,
            height: 38,
            background: "red",
        },
        swatch2: {
            width: 38,
            height: 38,
            background: "green",
        }
    }
    return (
        <div>
            {/*<div style={ styles.hue }>*/}
            {/*    <Hue hsl={ hsl } onChange={ onChange } />*/}
            {/*</div>*/}

            <div style={{ display: 'flex', paddingTop:'20px' }}>
                {/*<EditableInput*/}
                {/*    style={{ input: styles.input }}*/}
                {/*    value={ hex }*/}
                {/*    onChange={ onChange }*/}
                {/*/>*/}
                <div style={ styles.swatch } />
                <div style={ styles.swatch1 } />
                <div style={ styles.swatch2 } />
                
            </div>
        </div>
    )
}

export default CustomPicker(MyColorPicker);
