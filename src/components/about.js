import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container my-5">
                <div className="row">
                    <div className="col py-3">
                        <h1>Permíteme contarte sobre mí</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center text-justify">
                    <div className="col-12 col-md-6 col-lg-5">
                        <img src="https://place-hold.it/600x800/666" alt="" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 mt-4 mt-md-auto">
                        <p>Mi nombre es Sonia González Sierra, soy Maestra Reiki y Terapeuta en Medicina Complementaria, especialista en Terapia Regresiva y Tarot Terapéutico.</p>
                        <p>Cuando me inicié en el camino de la medicina complementaria, jamás imaginé el impacto que tendría en mi vida y en la de todas aquellas personas con quienes he trabajado.</p>
                        <p>Siempre me ha gustado la metafísica, la espiritualidad y las personas, y fue así que encontré en las terapias complementarias una manera de unir todo aquello. Pues me permite llegar a quienes lo necesitan y entregar una parte de mí en ayudar a los demás.</p>
                        <p>Quiero brindar un espacio en donde reconectarse y  expresarse libremente, elevando la autoestima y experimentando cambios esenciales  que permitan solucionar conflictos  y vivir en un estado de mayor armonía, entregando a las personas una alternativa para lograr una mayor comprensión espiritual, claridad mental y un estado de paz y tranquilidad respecto a sus propias experiencias.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;