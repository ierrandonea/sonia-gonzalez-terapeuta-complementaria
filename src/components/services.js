import React from 'react';
import TarotSun from '../assets/icons/tarot-sun.svg';
import Hourglass from '../assets/icons/hourglass.svg';
import Emotions from '../assets/icons/emotions.svg';
import Reiki from '../assets/icons/reiki.svg';
import Chakra from '../assets/icons/chakra.svg';
import Ritual from '../assets/icons/candle.svg';

const Services = () => {
    return (
        <section id="services" className="bg-secondary">
            <div className="container py-5">
                <div class="row py-3 text-justify text-dark">
                    <div className="col">
                        <h1>Terapias:</h1>
                        <p>El objetivo de mis terapias es generar ayudarte a comprender e integrar tu historia y visión de la vida, y así lograr conectar con la fuente de tus conflictos, para que puedas sanarte de una manera holística, por medio de la reflexión y autoconocimiento.</p>
                        <p>Para eso, puedo ofrecerte múltiples vías para lograr ese proceso:</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 card-deck py-5">
                    <div className="col mb-4">
                        <div className="card bg-primary text-white shadow">
                            <div class="card-body text-center">
                                <img src={TarotSun} className="w-25 mb-3" alt="" />
                                <h5 class="card-title">Tarot Terapéutico y Predictivo</h5>
                                <p class="card-text">A través de esta terapia se da paso al autoconocimiento que permitirá reconciliar experiencias traumáticas, bloqueos, miedos o fobias.</p>
                                <a href="#" class="btn btn-sm btn-info">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card bg-primary text-white shadow">
                            <div class="card-body text-center">
                                <img src={Hourglass} className="w-25 mb-3" alt="" />
                                <h5 class="card-title">Terapia Regresiva y de Vidas Pasadas</h5>
                                <p class="card-text">A través de esta terapia se da paso al autoconocimiento que permitirá reconciliar experiencias traumáticas, bloqueos, miedos o fobias.</p>
                                <a href="#" class="btn btn-sm btn-info">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card bg-primary text-white shadow">
                            <div class="card-body text-center">
                                <img src={Emotions} className="w-25 mb-3" alt="" />
                                <h5 class="card-title">Terapia de Emociones Atrapadas</h5>
                                <p class="card-text">A través de esta terapia se da paso al autoconocimiento que permitirá reconciliar experiencias traumáticas, bloqueos, miedos o fobias.</p>
                                <a href="#" class="btn btn-sm btn-info">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card bg-primary text-white shadow">
                            <div class="card-body text-center">
                                <img src={Reiki} className="w-25 mb-3" alt="" />
                                <h5 class="card-title">Reiki</h5>
                                <p class="card-text">A través de esta terapia se da paso al autoconocimiento que permitirá reconciliar experiencias traumáticas, bloqueos, miedos o fobias.</p>
                                <a href="#" class="btn btn-sm btn-info">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card bg-primary text-white shadow">
                            <div class="card-body text-center">
                                <img src={Chakra} className="w-25 mb-3" alt="" />
                                <h5 class="card-title">Alineación y Equilibrado de Chakras</h5>
                                <p class="card-text">A través de esta terapia se da paso al autoconocimiento que permitirá reconciliar experiencias traumáticas, bloqueos, miedos o fobias.</p>
                                <a href="#" class="btn btn-sm btn-info">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card bg-primary text-white shadow">
                            <div class="card-body text-center">
                                <img src={Ritual} className="w-25 mb-3" alt="" />
                                <h5 class="card-title">Limpiezas y Rituales Energéticos</h5>
                                <p class="card-text">A través de esta terapia se da paso al autoconocimiento que permitirá reconciliar experiencias traumáticas, bloqueos, miedos o fobias.</p>
                                <a href="#" class="btn btn-sm btn-info">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;