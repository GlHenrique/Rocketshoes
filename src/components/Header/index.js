import React from "react";
import {
    Container,
    Cart
} from './styles';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

function Header({cartSize}) {
    console.log(cartSize);
    return (
        <Container>
            <Link to='/'>
                <img src={logo} alt="rocketshoes"/>
            </Link>
            <Cart to="cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF"/>
            </Cart>
        </Container>
    )
}

export default connect(state => ({
    cartSize: state.cart.length // o state.cart é o nome do Reducer.
}))(Header);
