import React, { Component } from "react";
import { ProductList } from './styles';
import { tenisNike } from './utils.js'
import { MdAddShoppingCart } from "react-icons/all";
import api from '../../services/api';

export default class Home extends Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const response = await api.get(`products`);
        this.setState({ products: response.data });
    }
    render() {

        const { products } = this.state;

        return (
            <ProductList>
                {products.map(product => (
                    <li key={product.id}>
                    <img alt={product.title} src={product.image} />
                    <strong>Tênis muito legal</strong>
                    <span>R$ 129.90</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart color="#FFF" size={16} /> 3
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                ))}
            </ProductList>
        )
    }
}
