import React from 'react'

export const About = () => {
    return (
        <div id="about-us" className="section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <img  src="https://devstickers.com/assets/img/pro/sykl.png" className="img-fluid|" alt="bootslogo"/>
                </div>
                <div className="col">
                    <h1>Utilizando Bootstrap</h1>
                    <p>Este ejercicio se está haciendo con 
                        bootstrap y es llamativo cómo simplifica
                        las líneas de código css en un archivo css externo.
                        Pero esa simplificación cobra factura escribiendo
                        en una sola línea dentro de cada contenedor, todas las
                        propiedades necesarias.
                    </p>
                    <a href="https://getbootstrap.com/" target="blank" className="btn btn-dark btn-lg">Checa Bootstrap</a>
                </div>
            </div>
        </div>
    </div>
    )
}
