import React from 'react';

function Home(props) {
    console.warn("home",props)
    // console.warm("props",props)
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71wPwmxo2NL._SL1500_.jpg"/>
                </div>
                <div className="text-wrapper">
                    <span>i-Phone</span>
                    <span> Price:$1000.00</span>
                </div>
                <div className="btn-wrapper">
                    <button onClick={() => props.addToCartHandlar({ price: 1000, name: 'i-phone' })}>Add To Cart</button>
                </div>
                <div className="Remove-btn">
                    <button onClick={() => props.removeToCartHandlar({ price: 1000, name: 'i-phone' })}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
            
export default Home;