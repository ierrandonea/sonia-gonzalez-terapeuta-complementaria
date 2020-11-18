import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h1>Contacto:</h1>
                    </div>
                </div>
                <form className="card p-3 my-5">
                    <div className="row">
                        <div className="col">
                            <h5>Seleciona una o más terapias:</h5>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Tarot
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                <label class="form-check-label" for="defaultCheck2">
                                    Terapia Regresiva
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                <label class="form-check-label" for="defaultCheck2">
                                    Terapia de Emociones Atrapadas
                                </label>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                <label class="form-check-label" for="defaultCheck2">
                                    Reiki
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                <label class="form-check-label" for="defaultCheck2">
                                    Alineación de Chakras
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                <label class="form-check-label" for="defaultCheck2">
                                    Limpiezas Energéticas
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <hr />
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                <label class="form-check-label" for="defaultCheck2">
                                    Orientación Terapéutica
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5>Completa tus Datos:</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div class="form-group col-12 col-md-6">
                            <input type="email" class="form-control" id="email" placeholder="Tu email" />
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <input type="email" class="form-control" id="email" placeholder="Tu email" />
                        </div>
                    </div>
                    <div className="row">
                        <div class="form-group col-12">
                            <label for="exampleFormControlTextarea1">Cuéntame un poco mas:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-end">
                            <button type="submit" class="btn btn-lg btn-primary">Envíar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;