import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import { ENDERECO_API } from '../ultil/Constantes';

class ListMaterial extends React.Component{

   state = {

       listaMaterial: [],
       openModal: false,
       idRemover: null
   }

   componentDidMount = () => {
      
       this.carregarLista();
      
   }
   carregarLista = () => {

    axios.get(ENDERECO_API +"api/material")
    .then((response) => {
       
        this.setState({
            listaMateriais: response.data
        })
    })
    };
    
    formatarData = (dataParam) => {

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
     confirmaRemover = (id) => {

        this.setState({
            openModal: true,
            idRemover: id
             })  
        }
        
        remover = async () => {

            await axios.delete(ENDERECO_API + 'api/material/' + this.state.idRemover)
            .then((response) => {
       
                this.setState({ openModal: false })
                console.log('Material removido com sucesso.')
       
                axios.get(ENDERECO_API + "api/material")
                .then((response) => {
               
                    this.setState({
                        listaMateriais: response.data
                    })
                })
            })
            .catch((error) => {
                this.setState({  openModal: false })
                console.log('Erro ao remover um material.')
            })
        };
        setOpenModal = (val) => {

            this.setState({
                openModal: val
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

                              { this.state.listaMateriais.map(material => (

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
               <Modal
                   			basic
                   			onClose={() => this.setOpenModal(false)}
                   			onOpen={() => this.setOpenModal(true)}
                   			open={this.state.openModal}
               			>
                   			<Header icon>
                       				<Icon name='trash' />
                       				<div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
                   			</Header>
                   			<Modal.Actions>
                       				<Button basic color='red' inverted onClick={() => this.setOpenModal(false)}>
                       					<Icon name='remove' /> Não
                       				</Button>
                       				<Button color='green' inverted onClick={() => this.remover()}>
                       					<Icon name='checkmark' /> Sim
                       				</Button>
                   			</Modal.Actions>
               			</Modal>
           </div>
       )
   }
}

export default ListMaterial;
