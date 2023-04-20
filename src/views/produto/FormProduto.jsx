import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormProduto extends React.Component{
	state = {
		
		titulo: null,
		codigo: null,
		descricao: null,
		valorUnitario: null,
		tempoEntregaMinimo: null,
		tempoEntregaMaximo: null
	}

	salvar = () => {

		let produtoRequest = {

			titulo: this.state.titulo,
			codigo: this.state.codigo,
			descricao: this.state.descricao,
			valorUnitario: this.state.valorUnitario,
			tempoEntregaMinimo: this.state.tempoEntregaMinimo,
			tempoEntregaMaximo: this.state.tempoEntregaMaximo
		}
	
		axios.post("http://localhost:8082/api/produto", produtoRequest)
		.then((response) => {
			console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um produto.')
		})
	}

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Titulo'
										maxLength="100"
                                        placeholder="Informe o Titulo do Produto"
										value={this.state.titulo}
										onChange={e => this.setState({titulo: e.target.value})}
									/>

									<Form.Input
										required
                                        fluid
										label='Código do produto'
                                        placeholder="Informe o Titulo do Produto"
										value={this.state.codigo}
										onChange={e => this.setState({codigo: e.target.value})}
                                        >
                                        
									
									</Form.Input>
                                        
								</Form.Group>
								
                                <Form.Group>
                                        
                                        <Form.TextArea label ="Descrição"
										 
										
										placeholder='Informe a Descrição do produto' 
                                        width={16}
										value={this.state.descricao}
										onChange={e => this.setState({descricao: e.target.value})}/>
										
									</Form.Group>
                            
								<Form.Group>

									<Form.Input
										fluid
										label='Valor Unitário'
                                        width={4}>
										<InputMask 
										mask="99.99" 
										value={this.state.valorUnitario}
										onChange={e => this.setState({valorUnitario: e.target.value})}/> 
									</Form.Input>

									<Form.Input
										fluid
										label='Tempo de Entrega Minimo em minutos'
                                        width={9}>
										<InputMask 
										mask="99" 
										value={this.state.tempoEntregaMinimo}
										onChange={e => this.setState({tempoEntregaMinimo: e.target.value})}/> 
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Minimo em minutos'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99"
											value={this.state.tempoEntregaMaximo}
											onChange={e => this.setState({tempoEntregaMaximo: e.target.value})} 
                                            
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
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
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
}

export default FormProduto;