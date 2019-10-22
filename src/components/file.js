import React, { Component } from 'react';
import logop from '../images/logo.png';
import fondo from '../images/descarga.svg';
import QRCode from 'react.qrcode.generator';
import { Link } from 'react-router-dom';
import { UncontrolledCarousel, Modal, ModalBody, ModalFooter, ModalHeader, Alert } from "reactstrap";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css'




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
            URL1: 'https://0gqxxhb0wb.execute-api.us-east-1.amazonaws.com/Prod/send/',
            file: null,
            loader: false,
            company: "",
            email: "",
            descripcion: "",
            showDetails:false,

        }

        this.serviceKey = props.serviceKey;
        this.token = props.token;

        this.sendFile= this.sendFile.bind(this);

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

    input1(e) {
        this.setState({
            company: e.target.value
        })
        console.log(e.target.value)

    }

    input2(e) {
        this.setState({
            email: e.target.value
        })
        console.log(e.target.value)

    }
    input3(e) {
        this.setState({
            descripcion: e.target.value
        })
        console.log(e.target.value)

    }


    loaderFile() {



        /*this.sendFile()
*/

        if (this.state.file !== null && this.state.email !== "" && this.state.company !== "" && this.state.descripcion !== "") {

            this.setState({
                loader: true
            })

            var promise = Promise.resolve(this.sendFile())
            const that = this


            promise.then(function () {
                if (that.state.loader == true) {
                    console.log("Hola pachito " + that.state.loader)


                    setTimeout(() => {

                        document.getElementById("fileinput").value = "";
                        document.getElementById("inputCompany").value = "";
                        document.getElementById("inputEmail3").value = "";
                        document.getElementById("exampleFormControlTextarea1").value = "";
                        NotificationManager.success("Success message", "The information was sent successfully", 5000)

                        that.setState({
                            loader: false
                        })

                    }, 2000)


                }

            })
        } else {
            NotificationManager.warning("Warning message", "Fill in all the information before sending it")

        }



    }


    sendFile(ev) {

        ev.preventDefault();
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        console.log("si llegue al send")

        fetch('http://localhost:5000/enviar', {
            method: 'POST',
            body: data,
            headers:{
                'Access-Control-Allow-Origin': 'http://localhost:5000'
              }
          }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
          })
          .catch((error) => {
            console.error(error);
      
          });
      
        /*
        let files = this.state.file


        const reader = new FileReader();

        console.log("hola bb" + files[0].name)
        var dato = files[0].name;
        reader.readAsDataURL(files[0]);
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



        /*toBase64(files[0])*/




        /*
                let data1 = {
                    "toEmails": [
                        "cts.prescriptiva@carvajal.com"],
                    "subject": "Update-File",
                    "message": "Subí mi información a u su plataforma deseo que se contacten conmigo, mi email es " + this.state.email + " soy de la empresa" + this.state.company + " y  " + this.state.descripcion + " el nombre del archivo es " + files[0].name
                }
                console.log("+ mira la data" + data1.toEmails)
                let options1 = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data1)
        
                }
                if (data1 !== null && options1 !== null && files !== null) {
        
        
        
                    console.log("ahi vamos")
        
                    fetch('https://0gqxxhb0wb.execute-api.us-east-1.amazonaws.com/Prod/send/', options1)
                        .then(response => response.json())
                        .then((responseJson) => {
                            console.log("este es response " + responseJson.estado)
        
        
        
                        }).catch(error => console.log(error))
        
                }
                */


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

        /**timeout={30000} */

        if (this.state.loader == false) {

            return <div className="loader"></div>
        } else {
            return <div className="loader">
                <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} > </Loader>
                <h1>Enviando información</h1>
            </div>



        }




    }


    render() {

        if(this.state.showDetails==false)
        {
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
    
                        <form className="rigthform" onSubmit={this.sendFile}>
    
                            <div className="form-group row">
                                <label for="inputCompany" className="col-sm-4 col-form-label"><h1>
                                    Company name </h1></label>
                                <div className="col-sm-10">
                                    <input type="text" class="form-control" id="inputCompany" placeholder="Company name" onChange={this.input1.bind(this)} />
                                </div>
                            </div>
    
                            <div className="form-group row">
                                <label for="inputEmail3" class="col-sm-4 col-form-label"><h1> Email </h1></label>
                                <div className="col-sm-10" >
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" onChange={this.input2.bind(this)} />
                                </div>
                            </div>
    
    
    
                            <div className="form-group row">
                                <label for="exampleFormControlTextarea1" className="col-sm-4 col-form-label"><h1> Description </h1></label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={this.input3.bind(this)}></textarea>
                                </div>
                            </div>
    
                            <div className="form-group row">
                                <form className="md-form">
                                    <div className="file-field">
    
                                        <label for="avatar"><h1> Choose a file</h1></label> <br></br>
                                        <div className="btn">
                                            <input ref={(ref) => { this.uploadInput = ref; }} type="file" id="fileinput" name="file_input" multiple="multiple" onChange={(e) => this.onChange(e)} />
                                        </div>
                                    </div>
                                </form>
    
                            </div>
    
                            <button type="submit" className="btn btn-primary mb-2">Send Information</button>
    
    
                        </form>
    
                    </div>
    
                    {this.loader()}
    
    
                </div >
            );

        }else
        {
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
    
    
    
                </div >
            );
        }


    }

}


export default File; 