import React, { useState } from 'react';

import { EditableInput, Hue } from 'react-color/lib/components/common'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import "./ColorPicker.css";


const MyColorPicker = ({ setEditSection, store_design, handleDesign }) => {

    // const [sugestColor1, setsugestColor1] = useState({
    //     colorTitle: "#1767ad",
    //     colorSubtitle: "#154856",
    //     colorBackground: "#489656",
    //     colorFooter: "#435f9c"
    // })
    // const [sugestColor2, setsugestColor2] = useState({
    //     colorTitle: "#1767ad",
    //     colorSubtitle: "#587565",
    //     colorBackground: "#878985",
    //     colorFooter: "#435f9c"
    // })
    // const [sugestColor3, setsugestColor3] = useState({
    //     colorTitle: "#1767ad",
    //     colorSubtitle: "#1767ad",
    //     colorBackground: "#f3f3e6",
    //     colorFooter: "#435f9c"
    // })

    // const onSelectColor = (sugest) => {
    //     console.log(sugest)
    //     //handleDesign(store_design.st_design_st_design_footer_copyright, sugestColor1.colorFooter)
    //     // handleDesign(store_design.st_design_main_background_color, sugestColor1.colorBackground)
    //     // handleDesign(store_design.st_design_header_title_color, sugestColor1.colorTitle)
    //     // handleDesign(store_design.st_design_header_subtitle_color, sugestColor1.colorSubtitle)
    // }




    return (
        <div>
            {/*<div style={ styles.hue }>*/}
            {/*    <Hue hsl={ hsl } onChange={ onChange } />*/}
            {/*</div>*/}

            {/* <p>Sugerencias</p>

            <div className="sugest" style={{ display: 'flex' }} onClick={onSelectColor("sugest1")}>
                
                    <div style={{ background: sugestColor1.colorTitle }} />
                    <div style={{ background: sugestColor1.colorSubtitle }} />
                    <div style={{ background: sugestColor1.colorBackground }} />
                    <div style={{ background: sugestColor1.colorFooter }} />
                
            </div>
            <div className="sugest" style={{ display: 'flex' }} onClick={onSelectColor("sugest2")} >

                <div style={{ background: sugestColor2.colorTitle }} />
                <div style={{ background: sugestColor2.colorSubtitle }} />
                <div style={{ background: sugestColor2.colorBackground }} />
                <div style={{ background: sugestColor2.colorFooter }} />
            </div> */}

            <div>
                <p>Elige tu paleta de colores</p>
                <div className="sugest" style={{ display: 'flex', paddingTop: '5px' }} >

                    <div style={{ background: store_design.st_design_footer_background_color }} />
                    <div style={{ background: store_design.st_design_main_background_color }} />
                    <div style={{ background: store_design.st_design_header_title_color }} />
                    <div style={{ background: store_design.st_design_header_subtitle_color }} />
                    <div className="color_edit" onClick={() => setEditSection('colorEdit')}>
                        <span >
                            <FontAwesomeIcon icon={faPen} />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyColorPicker;
