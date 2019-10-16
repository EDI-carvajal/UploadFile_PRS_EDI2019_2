import React, { Component } from 'react';
import logop from '../images/logo.png';
import fondo from '../images/descarga.svg';
import QRCode from 'react.qrcode.generator';
import { Link } from 'react-router-dom';
import { UncontrolledCarousel, Modal, ModalBody, ModalFooter, ModalHeader, Alert } from "reactstrap";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'



class File extends Component {


    constructor(props) {
        {/* Este método es el primero que se ejecuta antes del render*/ }

        {/* Con el método super heredo todas la funcionalidades de react*/ }
        super(props);

        {/* State me indica el estado en el que están los datos en la aplicación react
    especificamente en este componente*/}
        this.state = {
            contenido: "",
            fileName: "",
            modalIsopen: false,
            prueba: "hola bb",
            URL: "http://192.168.96.37:4500/",
            file: null,
            loader: false
        }

        this.serviceKey = props.serviceKey;
        this.token = props.token;



        console.log("hola" + this.props)
    }






    toggleModal = value => {
        this.setState({
            modalIsopen: !this.state.modalIsopen
        });


    }


    onChange(e) {

        let files = e.target.files;

        this.setState({
            file: files

        })





    }

    loaderFile() {
        this.setState({
            loader: true
        })

        var promise = Promise.resolve(this.sendFile())
        const that = this


        promise.then(function () {
            if (that.state.loader == true) {
                console.log("Hola pachito " + that.state.loader)
                setTimeout(() => {
                    that.setState({
                        loader: false
                    })

                }, 2000)


            }

        })



    }


    sendFile() {
        let files = this.state.file

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

                fetch(this.state.URL + "enviar", options)
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


    componentDidMount() {
        console.log("montado")

    }


    /*
        cambio() {
            this.setState({
                prueba: "melo bb"
            })
    
            if (this.state.prueba !== "hola bb") {
                this.download()
            }
    
        }
    
    */

    /*
        QRGenerator(value) {
    
            if (value !== "hola bb") {
                console.log("si  cambió" + this.state.prueba)
                return <div className="HpQrcode" id="" >
    
                    <QRCode
                        value={"" + this.state.prueba}
                        size={200}
                        level={'H'}
                    />
                </div >;
    
    
            } else if (value == "hola bb") {
                console.log("no cambio " + this.state.prueba)
    
                return <div className="HpQrcode" id="" >
    
                    <h1> Hola bb</h1>
                </div >;
            }
        }
    
    */
    /*
        download() {
    
    
            console.log("Estado actual" + this.state.prueba)
            const canvas = document.querySelector('.HpQrcode > canvas');
            const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            let downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = "123456.png";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            console.log("Image", this.pngUrl)
        }
    */


    loader() {

        if (this.state.loader == false) {

            return <div></div>
        } else {
            return <Loader type="ball-triangle" color="#00BFFF" height={100} width={100} timeout={7000}> </Loader>


        }




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

                        <button type="button" className="btn btn-primary mb-2" onClick={this.loaderFile.bind(this)}>Send Information</button>


                    </form>

                </div>

                {this.loader()}


            </div >
        );
    }

}


export default File; 