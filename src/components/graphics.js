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
				
					<div class="column" style={{width:"50%"}}>

					<div style={{height:"40%",width:"80%",marginLeft:"8%"}}>
						<CanvasJSChart options = {options} />
					</div>



					</div>
					<div class="column" style={{width:"50%"}}>
						<div style={{height:"40%",width:"80%",marginLeft:"8%"}}>
							<CanvasJSChart options = {test} />	
						</div>
					</div>
			</div>

					<div class="row">
						<h2 className="listTittle">
								Información
						</h2>
						<div class="column" style={{marginTop:"9%",width:"50%",paddingRight:"13%"}}>
									<h3 className="listDetails">
										Número de celdas vacias : {data.numCeldasVacias}
									</h3>
									<h3 className="listDetails">
										Número de columnas vacias : {data.numColVacias}
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
						<div class="column"style={{marginTop:"9%",width:"50%"}}>
							<h5 className="text">
								<ul>
									<li>
										{data.texto[0]+"."+data.texto[1]+"."}
									</li>
									<li>
										{data.texto[2]+"."}
									</li>
									<li>
										{data.texto[3]+"."+data.texto[4]+"."}
									</li>
									<li>
										{data.texto[5]+"."}
									</li>
									<li>
										{data.texto[6]+"."+data.texto[7]+"."}
									</li>

								</ul>
								
							
								
								
								
								
						
								
							</h5>
						</div>



					</div>


						



					


					
			
			</div>	



		);
	}
}

export default Graphic;                           