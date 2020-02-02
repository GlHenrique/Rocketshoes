import React from "react";
import { Container, ProductTable, Total } from "./styles";
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from "react-icons/md";
import { connect } from "react-redux";

function Cart({cart, dispatch}) {
    return (
        <Container>
            <ProductTable>
                <thead>
                <tr>
                    <th/>
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {cart.map(product => (
                    <tr>
                        <td>
                            <img src={product.image} alt={product.title}/>
                        </td>
                        <td>
                            <strong>{product.title}</strong>
                            <span>{product.priceFormatted}</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        color="#7159C1"
                                        size={20}
                                    />
                                </button>
                                <input
                                    type="number"
                                    readOnly
                                    value={product.amount}
                                />
                                <button type="button">
                                    <MdAddCircleOutline
                                        color="#7159C1"
                                        size={20}
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$258,80</strong>
                        </td>
                        <td>
                            <button
                                type="button"
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        id: product.id
                                    })
                                }
                            >
                                <MdDelete size={20} color="#7159C1"/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 1920,00</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Cart);
