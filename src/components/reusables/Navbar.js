import React from 'react'
import {NavLink} from 'react-router-dom'
import {Search, Heart, ShoppingCart} from 'react-feather'

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar__main">
                <ul className="navbar__item-list">
                    <li><NavLink to="/" className="navbar__logo">Momo</NavLink></li>
                    <li className="navbar__item-list__item"><NavLink to="/pflanzen" className="navbar__link">Pflanzen</NavLink></li>
                    <li className="navbar__item-list__item"><a className="navbar__link">Zubehör</a></li>
                    <li className="navbar__item-list__item"><a className="navbar__link">Pflegetipps</a></li>
                    <li className="navbar__item-list__item"><a className="navbar__link">Einrichtung</a></li>
                </ul>
                <ul className="navbar__item-list navbar__quick-actions">
                    <li className="navbar__item-list__item"><Search/></li>
                    <li className="navbar__item-list__item"><Heart/></li>
                    <li className="navbar__item-list__item"><a className="navbar__link"><ShoppingCart/></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
