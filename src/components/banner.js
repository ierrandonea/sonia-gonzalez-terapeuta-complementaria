import React from 'react';

const Banner = () => {
    return (
        <section id="home">
            <div className="container-fluid">
                <div className="row card rounded-0 border-0">
                    <img src="https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_1280.jpg" className="card-img img-fluid banner-img" alt="" />
                    <div className="col-12 card-img-overlay d-flex flex-column justify-content-center">
                        <h1 className="display-2 font-vida">Sonia González Sierra</h1>
                        <h1 className="font-it">Terapeuta Holística</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;