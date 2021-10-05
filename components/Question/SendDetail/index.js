import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

function SendDetail() {
    return (
        <div className="send-questions">
            <h3><span>Kiero</span>Envíos</h3> 
            <br/>
            <h4><strong>Rapidez en tus envíos.</strong></h4>
            <p>Agiliza el proceso de envíos de tus productos, incorpora KieroEnvíos
                en tu tienda y disfruta de los múltiples beneficios que ofrece.</p>
                <br/>
            <h4><strong>Beneficios</strong></h4>
            <span className="check">{'✓'}</span> Seguridad
            <br/>
            <span className="check">{'✓'}</span> Rastreo de tu envío
            <br/>
            <span className="check">{'✓'}</span> Velocidad en la gestión
            <br/>
            <br/>
            <h4><strong>Tipo de envío</strong></h4>
            <br />
            <span className="check"><FontAwesomeIcon icon={faTruck} /> Envíos gratis</span>
            <br />
            <span className="check">{'✓'}</span> Entrega de 3 a 9 días hábiles
        </div>
    );
}

export default SendDetail;