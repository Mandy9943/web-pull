import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { SliderPicker } from 'react-color';

const MySwal = withReactContent(Swal)

function SliderWrapper(props) {
    const [color, setColor] = useState('#1767ad');

   
    return (
        <SliderPicker
            color={color}
            onChangeComplete={(color, e) => {
                setColor(color.hex);
                props.onChange(color.hex);
            }}
        />
    )
}

// function getBase64(img) {
//     let reader = new FileReader();
//     reader.onload = () => {
//
//     }
// }

export default async function shopQuickConfig(quick_config) {
    let colorTitle, colorSubtitle, colorMainBg, colorFooter;

    const queueConfig = [
        {// Background img
            title: 'Imagen del Banner',
            text: 'Preferiblemente 2000px X 200px',
            input: 'url',
            inputPlaceholder: 'Url de la imagen',
            validationMessage: 'Url invalida'
        }, {//Titulo
            title: 'Color del titulo',
            text: 'Titulo (Color)',
            html: (<SliderWrapper onChange={(color) => { colorTitle = color; }} />),
            preConfirm: () => {
                return  colorTitle
            }
        }, {//tipografia del titulo
            title: 'Tipografia Titulo',
            input: 'select',
            inputOptions: {
                'Arial, sans-serif': 'Arial',
                'Helvetica, sans-serif': 'Helvetica',
                'Gill Sans, sans-serif': 'Gill Sans',
                'Times New Roman, serif': 'Times New Roman'
            },
            inputPlaceholder: 'Selecciona la tipografia',
            // showCancelButton: true,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value) {
                        resolve()
                    } else {
                        resolve('Escoge una tipografia')
                    }
                })
            }
        }, {//Subtitulo texto
            title: 'Subtitulo',
            text: 'Subtitulo (Texto)',
            input: 'text',
            inputPlaceholder: 'Subtitulo',
        }, {//Subtirulo color
            title: 'Subtitulo (Color)',
            text: 'Subtitulo (Color)',
            html: (<SliderWrapper onChange={(color) => { colorSubtitle = color; }} />),
            preConfirm: () => {
                return colorSubtitle
            }
        }, {//Subtitulo tipografia
            title: 'Tipografia Subtitulo',
            input: 'select',
            inputOptions: {
                'Arial, sans-serif': 'Arial',
                'Helvetica, sans-serif': 'Helvetica',
                'Gill Sans, sans-serif': 'Gill Sans',
                'Times New Roman, serif': 'Times New Roman'
            },
            inputPlaceholder: 'Selecciona la tipografia',
            // showCancelButton: true,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value) {
                        resolve()
                    } else {
                        resolve('Escoge una tipografia')
                    }
                })
            }
        }, {// Color de fondo del contenido
            title: 'Contenido',
            text: 'Color de fondo',
            html: (<SliderWrapper onChange={(color) => { colorMainBg = color; }} />),
            preConfirm: () => {
                return colorMainBg
            }
        }, {// escoger plantilla
            title: 'Contenido',
            text: 'Widget',
            input: 'radio',
            inputOptions: {
                p2: 'Plantilla 2',
                p7: 'Plantilla 7',
            },
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes seleccionar uno'
                }
            }
        }, {//Footer color
            title: 'Color Pie de pagina ',
            text: 'Color de fondo',
            html: (<SliderWrapper onChange={(color) => { colorFooter = color; }} />),
            preConfirm: () => {
                return colorFooter
            }
        }, { //Footer Texto 
            title: 'Texto del pie de pagina',
            text: 'Copyright (Texto)',
            input: 'text',
            inputPlaceholder: 'Copyright',

        }, {//Footer logo
            title: 'Pie de pagina Logo',
            text: 'Logo',
            input: 'url',
            inputPlaceholder: 'Url de la imagen',
            validationMessage: 'Url invalida'
        }
    ]

    let result = await MySwal.mixin({
        confirmButtonText: 'Siguiente &rarr;',
        showCancelButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false
    }).queue(queueConfig);

    if (result.value) { // Generar estructura de datos a enviar
        // TODO improve all this
        
        const configObj = {
            "header": {
                "background_img": result.value[0],
                "title": {
                    "color": result.value[1],
                    "font": result.value[2],
                },
                "subtitle": {
                    "text": result.value[3],
                    "color": result.value[4],
                    "font": result.value[5]
                },
            },
            "main": {
                "background_color": result.value[6],
                "widget": result.value[7]
            },
            "footer": {
                "background_color": result.value[8],
                "copyright": result.value[9],
                "logo": result.value[10],
                // "facebook_link":"",
                // "twitter_link":"",
                // "instagram_link":"",
                // "youtube_link":"",
                // "pinterest_link":"",
            }
        }

        MySwal.fire({
            title: 'Guardar datos?',
            icon: 'question',
            showCancelButton: false,
            showDenyButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Si',
            allowOutsideClick: false,
            preConfirm: () => {
                let result = quick_config(configObj);
                
            }
        })

    }
}