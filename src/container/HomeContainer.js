
import Home from '../component/Home';   
import { connect } from 'react-redux';
import {addToCart,removeToCart} from '../sarvices/Actions/action';

const mapStateToProps = state => ({
    cardData:state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandlar:data=>dispatch(addToCart(data)),
    removeToCartHandlar:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
