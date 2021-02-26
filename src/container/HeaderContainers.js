
import Header from '../component/Header';   
import { connect } from 'react-redux';
// import {addToCart} from '../sarvices/Actions/action';




const mapStateToProps = state => ({
    cardData:state.cardItems
})

const mapDispatchToProps = dispatch => ({
    // addToCartHandlar:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Home;