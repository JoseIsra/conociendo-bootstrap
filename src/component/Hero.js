import React from 'react'

export const Hero = () => {
    return (
        <div id="hero" className="section">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Web Development <br />for the Universe</h1>
                    <p>
                        Web development is the building and maintenance of websites; it’s the work that happens behind
                        the scenes to make a website look great, work fast and perform well with a seamless user
                        experience.

                        Web developers, or ‘devs’, do this by using a variety of coding languages. The languages they
                        use depends on the types of tasks they are preforming and the platforms on which they are
                        working.
                    </p>
                    <button type="button" className="btn btn-dark btn-lg">GO CODE</button>
                </div>
                <div className="col img-col">
                    <img className="img-fluid" src={process.env.PUBLIC_URL+"develop.png"} alt="logo web" />
                </div>
            </div>

            <div className="row cards">
                <div className="col-md-3 d-flex justify-content-center ">
                    <div className="card" style={{width:'18rem'}}>
                        <img src="https://devstickers.com/assets/img/pro/71fi.png" alt="logo" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Node.js</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications</h6>
                            <p className="card-text">Beautiful</p>
                            <a href="https://nodejs.org/en/"rel="noreferrer"  className="card-link" target="_blank">Visita Nodejs</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <div className="card" style={{width:'18rem'}}>
                        <img src="https://devstickers.com/assets/img/pro/awz8.png" alt="logo" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Reactjs</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Javascript libray for building user interfaces</h6>
                            <p className="card-text">Awesome</p>
                            <a href="https://reactjs.org/" rel="noreferrer"  className="card-link" target="_blank">Visit React,js</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <div className="card" style={{width:'18rem'}}>
                        <img src="https://devstickers.com/assets/img/pro/f01r.png" alt="logo" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Vuejs</h5>
                            <h6 className="card-subtitle mb-2 text-muted"> Progressive framework for building user interfaces</h6>
                            <p className="card-text">Awesome too</p>
                            <a href="https://vuejs.org/v2/guide/" rel="noreferrer"  className="card-link" target="_blank">Visit Vue.js</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <div className="card" style={{width:'18rem'}}>
                        <img src="https://devstickers.com/assets/img/pro/fu83.png" alt="logo" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Angular</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Angular is a platform and framework for building single-page client applications using HTML and TypeScript</h6>
                            <p className="card-text">Strong</p>
                            <a href="https://angular.io/" rel="noreferrer"  className="card-link" target="_blank">Visit Angular</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
