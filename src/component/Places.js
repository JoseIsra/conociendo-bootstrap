import React from 'react'

export const Places = () => {
    return (
        <div className="section">
        <div className="container mt-5">
            <div className="row align-items-center">
                    <div className="col">
                        <h1>Some places to learn 😎</h1>
                    </div>
            </div>

            <div className="row align-items-center">
                <div className="col">
                    <div className="card mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEt1z_oSX68JFWpbF8-c0qZizwtwfqF3y2Q&usqp=CAU" className="card-img-top" alt="freecodecamp" />
                        <div className="card-body">
                        <h5 className="card-title">FreeCodeCamp</h5>
                        <p className="card-text">Theory and exercises</p>
                        <a className="card-link" rel="noreferrer"  href="https://www.freecodecamp.org/" target="_blank">Go There</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMd1BfN0SQKF015KnRgtjIoDVu7wjCCiBo5A&usqp=CAU" className="card-img-top" alt="youtube" />
                        <div className="card-body">
                        <h5 className="card-title">Youtube</h5>
                        <p className="card-text">A lot of tutorials</p>
                        <a className="card-link" rel="noreferrer"  href="https://www.youtube.com" target="_blank">Go There</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlJajhCUBLPdDHaV7cVeAxQHLSyx57ROK0g&usqp=CAU" className="card-img-top"
                        alt="logow3schol" />
                        <div className="card-body">
                        <h5 className="card-title">W3Schools</h5>
                        <p className="card-text">Theory and exercises</p>
                        <a className="card-link" rel="noreferrer"  href="https://www.w3schools.com" target="_blank">Go There</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZvNQjOcrUBmSDe9Zp8JqcxYzDYwNLebjoA&usqp=CAU" className="card-img-top" 
                        alt="logo codecademy" />
                        <div className="card-body">
                        <h5 className="card-title">Code Cademy</h5>
                        <p className="card-text">Theory and exercises</p>
                        <a className="card-link" rel="noreferrer"  href="https://www.codecademy.com/" target="_blank">Go There</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
