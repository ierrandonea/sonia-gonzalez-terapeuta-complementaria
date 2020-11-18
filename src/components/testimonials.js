import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container py-5">
                <div class="row py-3">
                    <div className="col">
                        <h1>Testimonios:</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center py-5">
                    <div className="col-2">
                        <img src="https://st.depositphotos.com/1008939/1880/i/450/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg" class="rounded-circle img-fluid" alt="" />
                    </div>
                    <div className="col-6">
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga culpa beatae, praesentium eveniet consectetur vitae consequatur. Eius voluptate, debitis maxime eligendi voluptatibus quis obcaecati praesentium asperiores voluptas. Sapiente, distinctio?"</p>
                        <div className="d-flex align-items-baseline">
                            <h5 className="mr-2">-John Doe,</h5>
                            <p className="text-muted">25 años</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;