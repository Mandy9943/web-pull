import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { SliderPicker } from 'react-color';
import dynamic from "next/dynamic";

const FontPicker = dynamic(() => import("font-picker-react"), {
    ssr: false,
});

const MySwal = withReactContent(Swal)

function SliderWrapper(props) {
    const [color, setColor] = useState();

    return (
        <>
            {props.text &&
            <div id="swal2-content" className="swal2-html-container" style={{display: "block"}}>{props.text}</div>
            }
            <div style={{margin: "1em auto"}}>
                <SliderPicker
                    color={color}
                    onChangeComplete={(color, e)=>{
                        setColor(color);
                        props.onChange(color.hex);
                    }}
                />
            </div>
        </>
    )
}

function FontWrapper(props) {
    const [font, setFont] = useState();

    return (
        <>
            {props.text &&
            <div id="swal2-content" className="swal2-html-container" style={{display: "block"}}>{props.text}</div>
            }
            <div style={{margin: "1em auto"}}>
                <FontPicker
                    // apiKey="YOUR_API_KEY"
                    activeFontFamily={font}
                    onChange={(nextFont) => setFont(nextFont.family)} />
            </div>
            <p className="apply-font">Lorem ipsum dolor sit amet consectetur adipiscing elit proin phasellus
                donec interdum potenti.</p>
        </>
    )
}

// function getBase64(img) {
//     let reader = new FileReader();
//     reader.onload = () => {
//
//     }
// }

export default async function shopQuickConfig(quick_config) {
    let colorTitle, fontTitle,
        colorSubtitle,
        colorMainBg,
        colorFooter;

    const commonConfig = {
        // https://github.com/sweetalert2/sweetalert2-react-content/issues/152  <<<<---- take a look ater on this
        confirmButtonText: 'Siguiente &rarr;',
        showCancelButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        position: 'top-right',
        grow: 'column',
        width: 300,
    };

    const queueConfig = [
        {// Background img
            title: 'Encabezado',
            text: 'Imagen de background',
            input: 'url',
            inputPlaceholder: 'Url de la imagen',
            validationMessage: 'Url invalida',
            ...commonConfig
        },{//Titulo
            title: 'Encabezado',
            html: (<SliderWrapper onChange={(color)=>{colorTitle=color;}} text="Titulo"/>),
            preConfirm: () => {
                return colorTitle
            },
            ...commonConfig
        },{
            title: 'Encabezado',
            html: (<FontWrapper onChange={font=>fontTitle=font} text='Titulo' />),
            preConfirm: () => {
                return fontTitle
            },
            ...commonConfig
        }, {//Subtitulo
            title: 'Encabezado',
            text: 'Subtitulo (Texto)',
            input: 'text',
            ...commonConfig
        },{
            title: 'Encabezado',
            html: (<SliderWrapper onChange={(color)=>{colorSubtitle=color;}} text='Subtitulo' />),
            preConfirm: () => {
                return colorSubtitle
            },
            ...commonConfig
        },{
            title: 'Encabezado',
            html: (<FontWrapper onChange={font=>fontTitle=font} text='Subtitulo' />),
            ...commonConfig
        },{//Contenido
            title: 'Contenido',
            html: (<SliderWrapper onChange={(color)=>{colorMainBg=color;}} text='Background' />),
            preConfirm: () => {
                return colorMainBg
            },
            ...commonConfig
        },{
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
            },
            ...commonConfig
        },{//Footer
            title: 'Pie de pagina',
            html: (<SliderWrapper onChange={(color)=>{colorFooter=color;}} text='Background' />),
            preConfirm: () => {
                return colorFooter
            },
            ...commonConfig
        },{
            title: 'Pie de pagina',
            text: 'Copyright (Texto)',
        ...commonConfig
        },{
            title: 'Pie de pagina',
            text: 'Logo',
            input: 'url',
            inputPlaceholder: 'Url de la imagen',
            validationMessage: 'Url invalida',
            ...commonConfig
        }, {
            title: 'Redes sociales',
            html:
                '<input placeholder="Facebook" id="swal-input1" class="swal2-input" style="margin-bottom: 2px">' +
                '<input placeholder="Twitter" id="swal-input2" class="swal2-input" style="margin-bottom: 2px">' +
                '<input placeholder="Instagram" id="swal-input3" class="swal2-input" style="margin-bottom: 2px">' +
                '<input placeholder="Youtube" id="swal-input4" class="swal2-input" style="margin-bottom: 2px">' +
                '<input placeholder="Pinterest" id="swal-input5" class="swal2-input" style="margin-bottom: 2px">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value,
                    document.getElementById('swal-input4').value,
                    document.getElementById('swal-input5').value
                ]
            },
            ...commonConfig
        }
    ]

    let result = await MySwal.queue(queueConfig);

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
            "main" : {
                "background_color": result.value[6],
                "widget": result.value[7]
            },
            "footer": {
                "background_color"  : result.value[8],
                "copyright"         : result.value[9],
                "logo"              : result.value[10],
                "facebook_link"     : result.value[11][0],
                "twitter_link"      : result.value[11][1],
                "instagram_link"    : result.value[11][2],
                "youtube_link"      : result.value[11][3],
                "pinterest_link"    : result.value[11][4],
            }
        }

        MySwal.fire({
            title: 'Guardar datos?',
            icon: 'question',
            showCancelButton: false,
            showDenyButton: true,
            showConfirmButon: true,
            confirmButtonText: 'Si',
            allowOutsideClick: false,
            preConfirm: () => {
                let result = quick_config(configObj);
                console.log(result)
            }
        })

    }
}