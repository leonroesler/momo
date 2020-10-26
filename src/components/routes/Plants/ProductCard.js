import React from "react"
import Button from "../../reusables/Button"

const ProductCard = ({product}) => {

    // convert value in cents to value in €
    const convertPrice = () => {
        return (
            product.price / 100
        )
    }

    return (
        <div className="product-card">
            <img src={require(`../../../assets/img/${product.img}`).default} className="product-card__product-img"/>
            <h4>{product.name ? product.name : '-'}</h4>
            <h5>{convertPrice()}€</h5>
            <Button className="product-card__button">Kaufen</Button>
        </div>
    )
}

export default ProductCard