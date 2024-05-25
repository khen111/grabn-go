
import image21 from '../../images/temporaryimage.jpg';
import image22 from '../../images/temporaryimage.jpg';
import image23 from '../../images/temporaryimage.jpg';
import image24 from '../../images/temporaryimage.jpg';
import image25 from '../../images/temporaryimage.jpg';
import image26 from '../../images/temporaryimage.jpg';
import image27 from '../../images/temporaryimage.jpg';
import image28 from '../../images/temporaryimage.jpg';
import image29 from '../../images/temporaryimage.jpg';

function Categories() {
    const categoriesItem = [
        { src: image21, title: "Fruits and Vegetables", link: "#" },
        { src: image22, title: "Dairy", link: "#" },
        { src: image23, title: "Meat and Seafood", link: "#" },
        { src: image24, title: "Snacks", link: "#" },
        { src: image25, title: "Beverages", link: "#" },
        { src: image26, title: "Frozen Foods", link: "#" },
        { src: image27, title: "Condiments and Sauces", link: "#" },
        { src: image28, title: "Cleaning Supplies", link: "#" },
        { src: image29, title: "Personal Care", link: "#" }
    ];

  return (
    <>
    <div id="sns_content" className="wrap layout-m" style={{ margin: '0 0 0px', minHeight: 'auto'}}>
                    <div className="container">


        <div className="row">
                        <div id="sns_main" className="col-md-12 col-main" style={{ margin: '0 0 0px', minHeight: 'auto'}}>
                            <div id="sns_mainmidle">
                                <div id="sns_producttaps1" className="sns_producttaps_wraps">
                            
                            
                                    <div id="sns_suggest12" className="sns_suggest">
                                    <div className="block-title">
                                        <h3>OUR CATEGORIES</h3>
                                        <i className="fa fa-align-justify"></i>
                                    </div>
                                    <div className="suggest-content">
            {categoriesItem.map((item, index) => (
                <div className="suggest-item" key={index}>
                    <img src={item.src} alt={item.title} />
                    
                    <br /><br />
                    <div className="title">
                        <a href={item.link}>{item.title}</a>
                    </div>
                </div>
            ))}
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

export default Categories
