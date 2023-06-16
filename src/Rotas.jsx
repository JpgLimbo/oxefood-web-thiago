import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCategoriaProduto from './views/categoriaproduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaproduto/ListCategoriaProduto';
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormComprador from './views/comprador/FormComprador';
import ListComprador from './views/comprador/ListComprador';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import FormMaterial from './views/material/FormMaterial';
import ListMaterial from './views/material/ListMaterial';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />

                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <ListProduto/> } />

                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />

                <Route path="list-material" element={ <ListMaterial/> } />
                <Route path="form-material" element={ <FormMaterial/> } />

                <Route path="form-comprador" element={ <FormComprador/> } />
                <Route path="list-comprador" element={ <ListComprador/> } />

                <Route path="form-categoria-produto" element={ <FormCategoriaProduto/> } />
                <Route path="list-categoria-produto" element={ <ListCategoriaProduto/> } />
            </Routes>
        </>
    )
}

export default Rotas
