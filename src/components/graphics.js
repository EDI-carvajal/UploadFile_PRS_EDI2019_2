import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Graphic extends Component {
	render() {
		let data = this.props.data;

		let complemento = 100 - data.porCeldasVacias
		let complemento2 = 100 - data.porFilasVacias

		const options = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Estado de las celdas",
			exportEnabled: true,
			title:{
				text: "Estado de las celdas"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				indexLabelFontColor: "white",
				dataPoints: [
					{ y: data.porCeldasVacias, label: "Celdas vacias",color:"#4AC3E9"},
					{ y: complemento, label: "Celdas llenas",color:"#041160" },

				]
			}]
		}


		const test = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Estado de las filas",
			exportEnabled: true,
			title:{
				text: "Estado de las filas"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelFontColor: "white",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: data.porFilasVacias, label: "Filas vacias",color:"#4AC3E9" },
					{ y: complemento2, label: "Filas con datos",color:"#041160" },

				]
			}]
		}
		return (
		<div style={{marginTop:"5%"}}> 
			<div class="row">
				
					<div class="column" style={{width:"50%",marginLeft:"2%"}}>

					<div style={{height:"40%",width:"100%"}}>
						<CanvasJSChart options = {options} />
					</div>

					<div style={{height:"40%",width:"100%",marginTop:"10%"}}>
						<CanvasJSChart options = {test} />	
					</div>

					</div>
					<div class="column">

						<h2 style={{color:"black",animation:"null",marginTop:"5%"}}>
							Información
						</h2>
						<div style={{marginTop:"50%"}}>

						
							<h3 className="listDetails">
								Número de celdas vacias : {data.numCeldasVacias}
							</h3>
							<h3 className="listDetails">
								Número de columnas vacias : {data.numColVacias}
							</h3>
							<h3 className="listDetails">
								Número de datos correlacionados : {data.numDatosCorr}
							</h3>
							<h3 className="listDetails">
								Número de datos mixtos : {data.numDatosMixtos}
							</h3>
							<h3 className="listDetails">
								Número de celdas de filas repetidas : {data.numFilasRepetidas}
							</h3>
							<h3 className="listDetails">
								Número de filas vacias : {data.numFilasVacias}
							</h3>
						</div>


					</div>
			
			</div>	


		</div>
		);
	}
}

export default Graphic;                           