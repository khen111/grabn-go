import './styles.css'
import banner1Image from '../../images/temporaryimage.jpg';
import banner2Image from '../../images/temporaryimage.jpg';
import banner3Image from '../../images/temporaryimage.jpg';
import banner4Image from '../../images/temporaryimage.jpg';
import banner5Image from '../../images/temporaryimage.jpg';
import banner6Image from '../../images/temporaryimage.jpg';
import banner7Image from '../../images/temporaryimage.jpg';
import banner8Image from '../../images/temporaryimage.jpg';






const products = [
  {
      id: 1,
      title: 'Fruits and Vegetables',
      imgSrc: banner1Image,
      href: 'detail.html',
      price: 'P 540.00',
  },
  {
      id: 2,
      title: 'Dairy',
      imgSrc: banner2Image,
      href: 'detail.html',
      price: 'P 550.00',
  },
  {
      id: 3,
      title: 'Meat and Seafood',
      imgSrc: banner3Image,
      href: 'detail.html',
      price: 'P 560.00',
  },
  {
      id: 4,
      title: 'Snacks',
      imgSrc: banner4Image,
      href: 'detail.html',
      price: 'P 570.00',
  },
  {
      id: 5,
      title: 'Beverages',
      imgSrc: banner5Image,
      href: 'detail.html',
      price: 'P 580.00',
  },
  {
      id: 6,
      title: 'Frozen Foods',
      imgSrc: banner6Image,
      href: 'detail.html',
      price: 'P 590.00',
  },
  {
      id: 7,
      title: 'Condiments and Sauces',
      imgSrc: banner7Image,
      href: 'detail.html',
      price: 'P 600.00',
  },
  {
      id: 8,
      title: 'Cleaning Supplies',
      imgSrc: banner8Image,
      href: 'detail.html',
      price: 'P 610.00',
  },
 

  // Add more products as needed
];

function Featured() {
  return (
    <>
         <div id="sns_content" className="wrap layout-m" style={{ margin: '0 0 0px', minHeight: 'auto'}}>
                <div className="container">

                <div className="sns-products-list">
    <div className="row">
      <div className="col-md-12">
        <div className="block-title">
          <h3>FEATURED PRODUCTS</h3>
        </div>
      </div>
      <div id="products_small" className="products-small owl-carousel owl-theme" style={{ display: 'inline-block' }}>
        <div className="item-row">
          {products.map((product) => (
            <div className="item" key={product.id}>
              <div className="item-inner">
                <div className="prd">
                  <div className="item-img clearfix">
                    <a className="product-image have-additional" title={product.title} href={product.href}>
                      <span className="img-main">
                        <img src={product.imgSrc} alt="" />
                      </span>
                    </a>
                  </div>
                  <div className="item-info">
                    <div className="info-inner">
                      <div className="item-title">
                        <a title={product.title} href={product.href}>
                          {product.title}
                        </a>
                      </div>
                      <div className="item-price">
                        <div className="price-box">
                          <span className="regular-price">
                            <span className="price">
                              <span className="price1">{product.price}</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="action-bot">
                      <div className="wrap-addtocart">
                        <button className="btn-cart" title="Add to Cart">
                          <i className="fa fa-shopping-cart"></i>
                          <span>&nbsp;&nbsp;&nbsp;Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

                  
                </div>
            </div>
    </>
  )
}

export default Featured
