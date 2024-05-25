
function Footer() {
  return (
    <>
       <div id="sns_footer" className="footer_style vesion2 wrap">
                <div id="sns_footer_top" className="footer">
                    <div className="container">
                        <div className="container_in">
                            <div className="row">
                                <div className="col-md-3 col-sm-12 col-xs-12 column0">
                                    <div className="contact_us">
                                        <h6>Contact us</h6>
                                        <ul className="fa-ul">
                                            <li className="pd-right">
                                                <i className="fa-li fa fw fa-home"> </i>
                                                C.M. Recto Ave., Lapasan, Cagayan de Oro, Philippines
                                            </li>
                                            <li>
                                                <i className="fa-li fa fw fa-phone"> </i>
                                                <p>(12) 3 456 7890</p>
                                                <p>(12) 3 456 7890</p>
                                            </li>
                                            <li>
                                                <i className="fa-li fa fw fa-envelope"> </i>
                                                <p>
                                                    <a href="mailto:contact@grabngo.com">contact@grabngo.com</a>
                                                </p>
                                                <p>
                                                    <a href="mailto:contact@grabngo.com">contact@grabngo.com</a>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-phone-12 col-xs-6 col-sm-3 col-md-2 column column1">
                                    <h6>About Us</h6>
                                    <ul>
                                        
                                        <li>
                                            We are a student team dedicated to creating a simple and efficient solution for managing grocery inventories, helping small stores streamline processes, reduce waste, and keep shelves stocked.
                                        </li>
                                       
                                    </ul>
                                </div>
                                <div className="col-phone-12 col-xs-6 col-sm-3 col-md-2 column column2">
                                     <h6>Service</h6>
                                    <ul>
                                        
                                        <li>
                                            <a href="#">Secure Payment </a>
                                        </li>
                                        <li>
                                            <a href="#">Delivery Times & Costs</a>
                                        </li>
                                        <li>
                                            <a href="#">Returns & Exchanges</a>
                                        </li>
                                        <li>
                                        <a href="#">FAQ&apos;s</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-phone-12 col-xs-6 col-sm-3 col-md-2 column column3">
                                    <h6>Account</h6>
                                    <ul>
                                        <li>
                                            <a href="#">My account</a>
                                        </li>
                                        
                                        <li>
                                            <a href="#">Order history</a>
                                        </li>
                                        <li>
                                            <a href="#">Checkout</a>
                                        </li>
                                        <li>
                                            <a href="#">Login</a>
                                        </li>
                                      
                                    </ul>
                                </div>
                                <div className="col-phone-12 col-xs-6 col-sm-3 col-md-3 column column4">
                                    <div className="subcribe-footer">
                                        <div className="block_border block-subscribe">
                                            <div className="block_head">
                                                <h6>Newsletter</h6>
                                                <p>Register your email for news</p>
                                            </div>
                                            <form id="newsletter-validate-detail">
                                                <div className="block_content">
                                                    <div className="input-box">
                                                        <div className="input_warp">
                                                            <input id="newsletter" className="input-text required-entry validate-email" type="text" title="Sign up for our newsletter" placeholder="Your email here" name="email" />
                                                        </div>
                                                        <div className="button_warp">
                                                            <button className="button gfont" title="Subcribe" type="submit">
                                                                <span>
                                                                    <span>Subscribe</span>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sns_footer_bottom" className="footer" style={{ color: 'white', margin: "auto", height:'40px', textAlign: 'center', width: '100%', background: '#222222'}}>
                    <div className="container" >
                        <div className="row">
                                    © 2024 Grab &apos;n Go. All Rights Reserved by Dev Alliance
                               
                            
                           
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Footer
