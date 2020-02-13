import React, { Component } from "react";
import { connect } from 'react-redux';
import { ProductList } from "./styles";
import { MdAddShoppingCart } from "react-icons/all";
import api from "../../services/api";
import { formatPrice } from "../../utils/format";
import * as CartActions from "../../store/modules/cart/actions";
import { bindActionCreators } from "redux";

class Home extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const response = await api.get(`products`);
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price)
        }));
        this.setState({products: data});
    }


    handleAddProduct = id => {
        const {addToCartRequest} = this.props;
        addToCartRequest(id);
    };


    render() {
        const {products} = this.state;
        const {amount} = this.props;

        return (
            <ProductList>
                {products.map(product => (
                    <li key={product.id}>
                        <img alt={product.title} src={product.image} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button type="button" onClick={() => this.handleAddProduct(product.id)}>
                            <div>
                                <MdAddShoppingCart color="#FFF" size={16} />
                                {' '} {amount[product.id] || 0}
                            </div>
                            <span>ADICIONAR AO CARRINHO</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}


const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount
    }, {})
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
