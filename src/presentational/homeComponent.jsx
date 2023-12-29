
import Carousel from 'react-bootstrap/Carousel';
import thirdImage from '../assets/desktop/pexels-antony-trivet-9980284.jpg'
import  secondImage from '../assets/desktop/pexels-donald-tong-23474.jpg'
import  img from '../assets/desktop/pexels-cottonbro-studio-5185169.jpg'
import {useMediaQuery} from 'react-responsive';
import NavComponent from './navComponent';
import   mobileImage from '../assets/mobile/pexels-cottonbro-studio-5185169 (2).jpg'
import   mobileSecondImg from '../assets/mobile/pexels-donald-tong-23474 (2).jpg'
import  mobileThirdImage from  '../assets/mobile/pexels-felipe-silva-10001234 (1).jpg'
import { useState } from 'react';
import '../presentational/presentational.css/homepage.css'
import LoginPage from './login component';
import FooterComponent from './footerComponent';




const HomeComponent=()=>{
    const isMobileView = useMediaQuery({ query: '(max-width: 1300px)' });

    const [activeIndex, setActiveIndex] = useState(0);

  // Function triggered on slide change
  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };
  
  const  navTextColor= activeIndex===1&&!isMobileView?{color:'white'}:isMobileView&&activeIndex===1?{color:'black'}:{};

    return(
        <div> 
      < NavComponent textColor={navTextColor}
             mobileCheck={isMobileView}
      />
        <Carousel  activeIndex={activeIndex} onSelect={handleSelect}>
        <Carousel.Item>
        <img src={isMobileView?mobileImage:img} alt="" className="d-block w-100" style={{ objectFit: 'cover', maxHeight: '100vh' }} />
                  <Carousel.Caption className='topLeftCaption '  >
            <h3>Timeless Elegance, Crafted for You</h3>
            <p>Indulge in craftsmanship that transcends time. Explore an exquisite selection of meticulously designed watches, blending sophistication with precision engineering. Elevate your style effortlessly!</p>
            <div className='submit'> Shop Now</div>
          </Carousel.Caption>
           
           <Carousel.Caption className='top-right-caption'> 
           <h3>Uncompromising Quality, Unmatched Performance</h3>
          <ul>
            <li>Water-resistant designs</li>
            <li>Premium materials: titanium, stainless steel, etc.</li>
            <li>Special functionalities: chronograph, GPS, etc.</li>
            <li>Warranty information: details about coverage</li>
          </ul>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={isMobileView?mobileSecondImg:secondImage} alt="" className="d-block w-100 " style={{ objectFit: 'cover', maxHeight: '100vh' }} />
        <Carousel.Caption  className="top-right-caption" >
          <h3>Uncompromising Quality, Unmatched Performance</h3>
          <ul>
            <li>Water-resistant designs</li>
            <li>Premium materials: titanium, stainless steel, etc.</li>
            <li>Special functionalities: chronograph, GPS, etc.</li>
            <li>Warranty information: details about coverage</li>
          </ul>
 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={isMobileView? mobileThirdImage:thirdImage} alt="" className="d-block w-100" style={{ objectFit: 'cover', maxHeight: '100vh' }} />
           <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <FooterComponent />
      </div>
  

    )
}

export default HomeComponent