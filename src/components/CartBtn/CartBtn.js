import React from "react"
import CartImg from "../../images/cart.svg"
import "./CartBtn.css"

const CartBtn = () => {
    return(
        <div className="cart-img">
                <img className="col-9 px-0" src={CartImg} alt=""/>
        </div>
    )
}

export default CartBtn