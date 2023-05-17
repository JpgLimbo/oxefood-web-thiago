import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { ENDERECO_API } from '../ultil/Constantes';
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';

class ListMaterial extends React.Component{

   state = {

       listaMaterial: []
      
   }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }
   carregarLista = () => {

    axios.get(ENDERECO_API +"api/material")
    .then((response) => {
       
        this.setState({
            listaMaterial: response.data
        })
    })

};

render(){
    return(
        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> Material </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Button
                            inverted
                            circular
                            icon
                            labelPosition='left'
                            color='orange'
                            floated='right'
                        >
                            <Icon name='clipboard outline' />
                            <Link to={'/form-material'}>Novo</Link>
                        </Button>
                        <br/><br/><br/>
                      
                      <Table color='orange' sortable celled>

                          <Table.Header>
                              <Table.Row>
                                  <Table.HeaderCell>Titulo</Table.HeaderCell>
                                  <Table.HeaderCell>Valor</Table.HeaderCell>
                                  <Table.HeaderCell>Responsavel</Table.HeaderCell>
                                  <Table.HeaderCell>Localização</Table.HeaderCell>
                                  <Table.HeaderCell>peso</Table.HeaderCell>
                                  <Table.HeaderCell>Data Aquisição</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaMaterial.map(material => (

                                  <Table.Row>
                                      <Table.Cell>{material.titulo}</Table.Cell>
                                      <Table.Cell>{material.valor}</Table.Cell>
                                      <Table.Cell>{material.responsavel}</Table.Cell>
                                      <Table.Cell>{material.localizacao}</Table.Cell>
                                      <Table.Cell>{material.peso}</Table.Cell>
                                      <Table.Cell>{material.dataAquisicao}</Table.Cell>
                                      <Table.Cell textAlign='center'>
                                         
                                          <Button
                                              inverted
                                              circular
                                              icon='edit'
                                              color='blue'
                                              itle='Clique aqui para editar os dados deste Material' /> &nbsp;
                                            <Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este Material' />

                                           </Table.Cell>
                                       </Table.Row>
                                   ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
               </div>
           </div>
       )
   }
}

export default ListMaterial;
