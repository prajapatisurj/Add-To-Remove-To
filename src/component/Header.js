import React from 'react';

function Header(props) {
    console.warn("home",props.cardData)
    return (
        <div>
            <div className="add-to-cart">
                <span className="len">{ props.cardData.length}</span>
               <img src="https://image.shutterstock.com/image-vector/shopping-cart-icon-flat-design-260nw-570153007.jpg" />
            </div>
        </div>
    )
}
            
export default Header;