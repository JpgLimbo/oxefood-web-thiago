import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from "../ultil/Constantes";

export default function FormMaterial () {
	
	const { state } = useLocation();

	const [idMaterial, setIdMaterial] = useState();
	const [titulo, setTitulo] = useState();
	const [valor, setValor] = useState();
	const [responsavel, setResponsavel] = useState();
	const [localizacao, setLocalizacao] = useState();
	const [peso, setPeso] = useState();
	const [dataAquisicao, setDataAquisicao] = useState();

	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get(ENDERECO_API + "api/material/" + state.id)
			.then((response) => {
				setIdMaterial(response.data.id)
				setTitulo(response.data.titulo)
				setValor(response.data.valor)
				setResponsavel(response.data.responsavel)
				setDataAquisicao(formatarData(response.data.dataAquisicao))
				setLocalizacao(response.data.localizacao)
				setPeso(response.data.peso)
				
			})
		}
	}, [state])

	function salvar() {

		let materialRequest = {

			titulo: titulo,
			valor: valor,
			responsavel: responsavel,
			localizacao: localizacao,
			peso: peso,
            dataAquisicao: dataAquisicao
		}
	
		if (idMaterial != null) { //Alteração:

			axios.put(ENDERECO_API + "api/material/" + idMaterial, materialRequest)
			.then((response) => { console.log('Material alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alter um Material.') })

		} else { //Cadastro:

			axios.post(ENDERECO_API + "api/material", materialRequest)
			.then((response) => { console.log('Material cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o Material.') })
		}
	}
	 function formatarData  (dataParam) {

        /*
        if (dataParam == null || dataParam == '') {
            return ''
        }
        
        let dia = dataParam.substr(8,2);
        let mes = dataParam.substr(5,2);
        let ano = dataParam.substr(0,4);
        let dataFormatada = dia + '/' + mes + '/' + ano;
        */

       let dataFormatada = dataParam

        return dataFormatada
    };
    
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

					{ idMaterial === undefined &&
						<h2> <span style={{color: 'darkgray'}}> Material &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
						{ idMaterial != undefined &&
						<h2> <span style={{color: 'darkgray'}}> Material &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}
                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Titulo'
										maxLength="100"
										value={titulo}
										onChange={e => setTitulo(e.target.value)}
									/>

									<Form.Input
										fluid
										label='Valor'
										value={valor}
										onChange={e => setValor(e.target.value)}/> 
										
									

								</Form.Group>
								
								<Form.Group>

									
										<Form.Input
										fluid
										label='Responsavel'
										width={4}
										value={responsavel}
										onChange={e => setResponsavel(e.target.value)}/> 
										
                                        <Form.Input
										fluid
										label='Localizacao'
										width={4}
										value={localizacao}
										onChange={e =>setLocalizacao(e.target.value)}/> 

									<Form.Input
										fluid
										label='Peso'
										width={4}
										value={peso}
										onChange={e => setPeso(e.target.value)}/> 
										
										

                                    <Form.Input
                                        fluid
                                        label='Data Aquisicao'
                                        width={4}
                                    >
                                        <InputMask 
                                            mask="99/99/9999" 
                                            maskChar={null}
                                            placeholder="Ex: 20/03/1985"
											value={dataAquisicao}
											onChange={e => setDataAquisicao(e.target.value)}
                                        /> 
                                    </Form.Input>

								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										
										>
										<Icon name='reply' />
										<Link to={'/list-material'}>Voltar</Link>
										
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={() => salvar()}
											
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}

