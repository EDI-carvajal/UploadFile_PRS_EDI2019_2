import React, { Component } from 'react';
import logop from '../images/logo.png';
import fondo from '../images/descarga.svg';


class File extends Component {


    constructor(props) {
        {/* Este método es el primero que se ejecuta antes del render*/ }

        {/* Con el método super heredo todas la funcionalidades de react*/ }
        super(props);

        {/* State me indica el estado en el que están los datos en la aplicación react
    especificamente en este componente*/}
        this.state = {
            contenido: "",
            fileName: ""
        }

        console.log("hola" + this.props)
    }








    /*
        getBase64(file) {
            var reader = new FileReader();
            reader.readAsDataURL(file[0]);
            reader.onload = function () {
                console.log(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
    
    */
    /*
        onChange(e) {
            let files = e.target.files;
    
            const data = new FormData();
            data.append('file', files[0]);
            console.log(files[0])
    
            let options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: data
    
            }
    
    
            fetch("http://localhost:5000/upload", options)
                .then(response => response.json())
                .then((responseJson) => {
                    console.log("este es response " + responseJson)
    
                }).catch(error => console.log(error))
    
    
        }
    */


    onChange(e) {

        let files = e.target.files;

        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();

            console.log("hola bb" + file.name)
            var dato = file.name;
            reader.readAsDataURL(file);
            reader.onload = (() => {

                let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');


                let data = { 'contenido': encoded, 'filename': dato }
                let options = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)

                }


                console.log(options)

                fetch("http://172.19.15.19:5000/enviar", options)
                    .then(response => response.json())
                    .then((responseJson) => {
                        console.log("este es response " + responseJson.estado)



                    }).catch(error => console.log(error))



                console.log(encoded)
                console.log("mira ve" + dato)
            });
            reader.onerror = error => reject(error);
        });


        toBase64(files[0])

    }



    render() {

        return (

            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom fixed-top">
                    <img src={logop} className="home-logo" alt="Logo" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav mr-auto">
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                            <a className="btn btn-primary my-2 my-sm-0" href="http://prescriptiva.co/" >Know More</a>
                        </form>
                    </div>
                </nav>


                <div>

                    <h2>We transform data into strategies</h2>
                    <img src={fondo} className="fondo" alt="Logo" />

                    <form className="rigthform">

                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-4 col-form-label"><h1>
                                Company name </h1></label>
                            <div className="col-sm-10">
                                <input type="text" class="form-control" id="inputPassword3" placeholder="Company name" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputEmail3" class="col-sm-4 col-form-label"><h1> Email </h1></label>
                            <div className="col-sm-10" >
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                            </div>
                        </div>



                        <div className="form-group row">
                            <label for="exampleFormControlTextarea1" className="col-sm-4 col-form-label"><h1> Description </h1></label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                            </div>
                        </div>

                        <div className="form-group row">
                            <form className="md-form">
                                <div className="file-field">

                                    <label for="avatar"><h1> Choose a file</h1></label> <br></br>
                                    <div className="btn">
                                        <input type="file" name="file_input" multiple="multiple" onChange={(e) => this.onChange(e)} />
                                    </div>



                                </div>
                            </form>

                        </div>

                        <button type="submit" className="btn btn-primary mb-2">Send Information</button>


                    </form>


                </div>
            </div >
        );
    }

}


export default File; 