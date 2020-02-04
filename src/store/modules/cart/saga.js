import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSucees } from "./actions";

function* addToCart({id}) {
    const response = yield call(api.get, `/products/${id}`);

    yield put(addToCartSucees(response.data));
}

export default all([
    takeLatest('ADD_TO_CART_REQUEST', addToCart)
])
