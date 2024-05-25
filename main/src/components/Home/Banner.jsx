import './styles.css'
import slideshow1Image from '../../images/temporaryimage.jpg';
import banner1Image from '../../images/temporaryimage.jpg';
import banner2Image from '../../images/temporaryimage.jpg';
import banner3Image from '../../images/temporaryimage.jpg';

const SnsSlideshow1 = () => {
    return (
        <div id="sns_slideshow1" className="wrap">
            <div id="header-slideshow">
                <div className="container">
                    <div className="row">
                        <div className="slideshows col-md-6 col-sm-8">
                            <div id="slider123" className="owl-carousel owl-theme" style={{ overflow: 'hidden' }}>
                                <div className="item style1">
                                    <img src={slideshow1Image} alt="" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="banner-right col-md-6 col-sm-4">
                            <div className="banner6 banner5 dbn col-md-12 col-sm-6" id='forImage' style={{height: '280px'}}>
                                <a href="#">
                                    <img src={banner1Image} alt="" />
                                </a>
                            </div>
                            <div className="banner6 pdno col-md-12 col-sm-12">
                                <div className="banner7 banner6  banner5 col-md-6 col-sm-12"  id='forImage'>
                                    <a href="#">
                                        <img src={banner2Image} alt="" />
                                    </a>
                                </div>
                                <div className="banner8 banner6  banner5 col-md-6 col-sm-12"  id='forImage'>
                                    <a href="#">
                                        <img src={banner3Image} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SnsSlideshow1;
