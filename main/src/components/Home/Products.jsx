

import image21 from '../../images/temporaryimage.jpg';
import image22 from '../../images/temporaryimage.jpg';
import image23 from '../../images/temporaryimage.jpg';
import image24 from '../../images/temporaryimage.jpg';
import image25 from '../../images/temporaryimage.jpg';
import image26 from '../../images/temporaryimage.jpg';
import image27 from '../../images/temporaryimage.jpg';
import image28 from '../../images/temporaryimage.jpg';




function Products() {
    const products = [
        {
          id: 1,
          title: "Fruits and Vegetables",
          imgSrc: image21,
          price1: "P 540.00",
          price2: "P 600.00",
          new: true,
          sale: true
        },
        {
          id: 2,
          title: "Dairy",
          imgSrc: image22,
          price1: "P 120.00",
          price2: "P 150.00",
          sale: false
        },
        {
          id: 3,
          title: "Meat and Seafood",
          imgSrc: image23,
          price1: "P 300.00",
          price2: "P 350.00",
          new: true,
          sale: true
        },
        {
          id: 4,
          title: "Snacks",
          imgSrc: image24,
          price1: "P 80.00",
          price2: "P 100.00",
          sale: false
        },
        {
          id: 5,
          title: "Beverages",
          imgSrc: image25,
          price1: "P 800.00",
          price2: "P 950.00",
          new: true,
          sale: true
        },
        {
          id: 6,
          title: "Frozen Foods",
          imgSrc: image26,
          price1: "P 250.00",
          price2: "P 300.00",
          sale: true
        },
        {
          id: 7,
          title: "Condiments and Sauces",
          imgSrc: image27,
          price1: "P 200.00",
          price2: "P 250.00",
          sale: false
        },
        {
          id: 8,
          title: "Cleaning Supplies",
          imgSrc: image28,
          price1: "P 150.00",
          price2: "P 180.00",
          sale: true
        },
        {
          id: 9,
          title: "Personal Care",
          imgSrc: image28,
          price1: "P 150.00",
          price2: "P 180.00",
          sale: true
        },  {
            id: 9,
            title: "Personal Care",
            imgSrc: image28,
            price1: "P 150.00",
            price2: "P 180.00",
            sale: true
          }
      ];
      


    return (
      <>
      <div id="sns_content" className="wrap layout-m" style={{ minHeight: 'auto', marginTop: "-10px"}}>
                      <div className="container">
  
  
          <div className="row">
                          <div id="sns_main" className="col-md-12 col-main">
                              <div id="sns_mainmidle">
                                  <div id="sns_producttaps1" className="sns_producttaps_wraps">
                              
                              
                                      
  
  
                       
                                    <div className="tab-content">
                                      <div role="tabpanel" className="tab-pane active" id="home">
                                          <div className="products-grid row style_grid">
    {products.map(product => (
      <div key={product.id} className="item col-lg-2d4 col-md-3 col-sm-4 col-xs-6 col-phone-12" style={{ margin: 'auto'}}>
        <div className="item-inner">
          <div className="prd" style={{ display: "flex", flexDirection: 'column'}}>
            <div>
              <div className="ico-label">
              {product.new && <span className="ico-product ico-new">New</span>}
                {product.sale && <span className="ico-product ico-sale">Sale</span>}
              </div>
              <a className="product-image have-additional" title={product.title} href="detail.html">
                <span className="img-main" >
                  <img src={product.imgSrc} alt={product.title}  />
                </span>
              </a>
            </div>

            <div className="item-info" style={{marginTop: '10px'}}>
              <div className="info-inner" style={{}}>
                <div className="item-title">
                    
                  <a title={product.title} href="detail.html">{product.title}</a>
                </div>
                <div className="item-price">
                  <div className="price-box">
                    <span className="regular-price">
                      <span className="price">
                        <span className="price1">{product.price1}</span>
                        {product.sale && <span className="price2">{product.price2}</span>}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="action-bot" >
              <div className="wrap-addtocart" style={{marginTop: '35px'}}>
                <button className="btn-cart" title="Add to Cart">
                  <i className="fa fa-shopping-cart"></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
                                      </div>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <h3 className="bt-more">
                                      <span>Load more products</span>
                                    </h3>
                                  </div>   
  
                              
                                
                                  
  
                               
  
  
  
  
  
                             
                               </div>
                          </div>
                      </div>
  
  
                      </div>
                      </div>
      </>
    )
  }
  
  export default Products
  