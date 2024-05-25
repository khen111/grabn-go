import { useState } from 'react';
import logoImage from '../images/logo.jpg';
import tempimg from '../images/temporaryimage.jpg';



function Header() {
    const cartItems = [
        {
            id: 1,
            title: 'Apple',
            imgSrc: tempimg,
            href: 'detail.html',
            removeLink: '#',
            editLink: '#',
            productLink: 'detail.html',
            quantity: 1,
            price: 'P 540.00'
        },
        {
            id: 2,
            title: 'Orange',
            imgSrc: tempimg,
            href: 'detail.html',
            removeLink: '#',
            editLink: '#',
            productLink: 'detail.html',
            quantity: 1,
            price: 'P 540.00'
        },
        {
            id: 3,
            title: 'Grapes',
            imgSrc: tempimg,
            href: 'detail.html',
            removeLink: '#',
            editLink: 'detail.html',
            productLink: '#',
            quantity: 1,
            price: 'P 540.00'
        }
    ];

    const [showMenu, setShowMenu] = useState(false);

  return (
    <>
       <div id="sns_wrapper">      
            
            <div id="sns_header" className="wrap">
       
                <div className="sns_header_top">
                    <div className="container">
                        <div className="sns_module">
                            
                            <div className="header-account">
                                <div className="myaccount">
                                    <div className="tongle">
                                        <i className="fa fa-user"></i>
                                        <span>My account</span>
                                        <i className="fa fa-angle-down"></i>
                                    </div>
                                    <div className="customer-ct content">
                                        <ul className="links">
                                            <li className="first">
                                                <a className="top-link-myaccount" title="My Account" href="#">My Account</a>
                                            </li>
                                           
                                            <li>
                                                <a className="top-link-checkout" title="Checkout" href="#">Checkout</a>
                                            </li>
                                            <li className=" last">
                                                <a className="top-link-login" title="Log In" href="#">Login</a>
                                            </li>
                                            <li>
                                                <a className="top-link-wishlist" title="My Wishlist" href="#">Register</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sns_header_logo">
    <div className="container">
        <div className="container_in">
            <div className="row" style={{ margin: "auto", display: "flex", justifyContent: "center", alignContent: "center" }}>
                <h1 id="logo" className="responsv col-md-3">
                
                    <img alt="" src={logoImage} />
             
                </h1>
            </div>
        </div>
    </div>
</div>










<div id="sns_menu">
    <div className="container">
        <div className="sns_mainmenu">
            <div id="sns_mainnav">
                <div id="sns_custommenu" className="visible-md visible-lg">
                    <ul className="mainnav">
                        <li className="level0 custom-item active">
                            <a className="menu-title-lv0 pd-menu116" href="index.html" target="_self">
                                <span className="title">HOME</span>
                            </a>
                        </li>
                        <li className="level0 custom-item">
                                            <a className="menu-title-lv0" href="#">
                                                <span className="title">ABOUT US</span>
                                            </a>
                                        </li>
                                        <li className="level0 custom-item">
                                            <a className="menu-title-lv0" href="blog.html">
                                                <span className="title">All PRODUCTS</span>
                                            </a>
                                        </li>
                                        <li className="level0 custom-item">
                                            <a className="menu-title-lv0" href="contact-us.html">
                                                <span className="title">CONTACT US</span>
                                            </a>
                                        </li>
                    </ul>
                </div>
                
                <div id="sns_mommenu" className="menu-offcanvas hidden-md hidden-lg">

    <span className="btn2 btn-navbar offcanvas" onClick={() => setShowMenu(!showMenu)}>
        <i className="fa fa-align-justify"></i>
        <span className="overlay"></span>
    </span>

    <span className="btn2 btn-navbar rightsidebar">
        <i className="fa fa-align-right"></i>
        <span className="overlay"></span>
    </span>

    {showMenu && (
    <div  className="offcanvas">
        <ul className="mainnav">
            <li className="level0 custom-item">
                <div className="accr_header">
                    <a className="menu-title-lv0" href="index.html">
                        <span className="title">Home</span>
                    </a>
                </div>
            </li>
            <li className="level0 nav-5 first active">
                <div className="accr_header">
                    <a className="menu-title-lv0" href="listing-grid.html">
                        <span>About Us</span>
                    </a>
                </div>
            </li>
            <li className="level0 nav-6 parent">
                <div className="accr_header">
                    <a className="menu-title-lv0" href="#">
                        <span>All products</span>
                    </a>
                    <span className="btn_accor"></span>
                </div>
            </li>
            <li className="level0 nav-7">
                <div className="accr_header">
                    <a className="menu-title-lv0" href="#">
                        <span>Contact Us</span>
                    </a>
                </div>
            </li>
          
        </ul>
    </div>
      )}
</div>


            </div>
            <div className="sns_menu_right">
                <div className="block_topsearch">
                    <div className="top-cart">
                        <div className="mycart mini-cart">
                            <div className="block-minicart">
                                <div className="tongle">
                                    <i className="fa fa-shopping-cart"></i>
                                    <div className="summary">
                                        <span className="amount">
                                            <a href="#">
                                                <span>3</span>
                                                ( items )
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <div className="block-content content">
                                    <div className="block-inner">
                                    <ol id="cart-sidebar" className="mini-products-list">
            {cartItems.map((item) => (
                <li key={item.id} className="item odd">
                    <a className="product-image" title={item.title} href={item.href}>
                        <img alt={item.title} src={item.imgSrc} />
                    </a>
                    <div className="product-details">
                        <a 
                            className="btn-remove" 
                            onClick={() => window.confirm('Are you sure you would like to remove this item from the shopping cart?')} 
                            title="Remove This Item" 
                            href={item.removeLink}
                        >
                            Remove This Item
                        </a>
                        <a className="btn-edit" title="Edit item" href={item.editLink}>Edit item</a>
                        <p className="product-name">
                            <a href={item.productLink}>{item.title}</a>
                        </p>
                        <strong>Quantity: {item.quantity}</strong>
                        <br/>
                        <br/>
                        <span className="price">{item.price}</span>
                    </div>
                </li>
            ))}
        </ol>
                                        <p className="cart-subtotal">
                                            <span className="label">Total:</span>
                                            <span className="price"  style={{color: "#E34444"}}>P 540.00</span>
                                        </p>
                                        <div className="actions">
                                            <a className="button">
                                                <span>
                                                    <span>Check out</span>
                                                </span>
                                            </a>
                                            <a className="button gfont go-to-cart" href="shoppingcart.html">Go to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</div>











                </div>
                </div>
    </>
  )
}

export default Header
