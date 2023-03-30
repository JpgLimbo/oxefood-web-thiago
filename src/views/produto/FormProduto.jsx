import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

class FormProduto extends React.Component{

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
									/>

									<Form.Input
										required
                                        fluid
										label='Código do produto'
                                        placeholder="Informe o Titulo do Produto"
                                        >
                                        
									
									</Form.Input>
                                        
								</Form.Group>
								
                                <Form.Group
										
                                        >
                                        
                                        <TextArea placeholder='Informe a Descrição do produto' 
                                        />
									</Form.Group>
                            
								<Form.Group>

									<Form.Input
										fluid
										label='Valor Unitário'
                                        width={4}>
										<InputMask 
										mask="99,99" /> 
									</Form.Input>

									<Form.Input
										fluid
										label='Tempo de Entrega Minimo em minutos'
                                        width={9}>
										<InputMask 
										mask="99" /> 
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Minimo em minutos'
                                        width={6}
                                    >
                                        <InputMask 
                                            mask="99" 
                                            
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