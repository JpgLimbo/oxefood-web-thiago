import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import { ENDERECO_API } from '../ultil/Constantes';

class ListComprador extends React.Component{

    state = {
 
        listaComprador: []
       
    }
 
    componentDidMount = () => {
       
        this.carregarLista();
       
    }
    carregarLista = () => {

        axios.get(ENDERECO_API + "api/comprador")
        .then((response) => {
           
            this.setState({
                listaComprador: response.data
            })
        })
 
    };
 
    formatarData = (dataParam) => {
 
        let data = new Date(dataParam);
        let dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
        let mes = (data.getMonth() + 1) < 10 ? "0" + (data.getMonth() + 1) : (data.getMonth() + 1);
        let dataFormatada = dia + "/" + mes + "/" + data.getFullYear();
       
        return dataFormatada
    };
    render(){
        return(
            <div>
 
                <div style={{marginTop: '3%'}}>
 
                    <Container textAlign='justified' >
 
                        <h2> Comprador </h2>
 
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
                                <Link to={'/form-comprador'}>Novo</Link>
                            </Button>
                            <br/><br/><br/>
                      
                        <Table color='orange' sortable celled>

                          <Table.Header>
                              <Table.Row>
                                  <Table.HeaderCell>Nome</Table.HeaderCell>
                                  <Table.HeaderCell>Endereco Comercial</Table.HeaderCell>
                                  <Table.HeaderCell>Endereco Residencial</Table.HeaderCell>
                                  <Table.HeaderCell>Comissão</Table.HeaderCell>
                                  <Table.HeaderCell>Trabalho Home Office</Table.HeaderCell>
                                  <Table.HeaderCell>Quantidade compras medias mês</Table.HeaderCell>
                                  <Table.HeaderCell>Contratado Em</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                        <Table.Body>

                            { this.state.listaComprador.map(comprador => (

                                <Table.Row>
                                     <Table.Cell>{comprador.nome}</Table.Cell>
                                     <Table.Cell>{comprador.enderecoComercial}</Table.Cell>
                                     <Table.Cell>{comprador.enderecoResidencial}</Table.Cell>
                                     <Table.Cell>{comprador.comissao}</Table.Cell>
                                     <Table.Cell>{comprador.trabalhoHomeOffice }</Table.Cell>
                                     <Table.Cell>{comprador.qtdComprasMediasMes}</Table.Cell>
                                     <Table.Cell>{this.formatarData(comprador.contratadoEm)}</Table.Cell>
                                     <Table.Cell textAlign='center'>
                                         
                                        <Button
                                            inverted
                                            circular
                                            icon='edit'
                                            color='blue'
                                            title='Clique aqui para editar os dados deste comprador' /> &nbsp;

                                        <Button
                                            inverted
                                            circular
                                            icon='trash'
                                            color='red'
                                            title='Clique aqui para remover este comprador' />

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

export default ListComprador;

