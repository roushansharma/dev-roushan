import React from "react";   
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css'; 

const options = { 
    loop: false,
    margin: 20, 
    items: 1,
    lazyLoad: true,
    dots: false,
    navText: ['', ''],
    nav: true,
    responsive: {
        0: {
            items: 1,
            stagePadding: 60,
        },
        600: {
            items: 1,
            stagePadding: 100,
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 3,
        },
        1400: {
            items: 3,
        },
        1600: {
            items: 5,
        },
    },
};

// const events = {
//     onDragged: function(event) {...},
//     onChanged: function(event) {...}
// };

function CrouselPortfolio(){
    return(
        <OwlCarousel options={options}  >
            <div>
                <div className="innerPort position-relative">
                    <img src="Images/port-1.jpeg" className="w-100" alt=""  />
                    <div className="desPort">Sketch The Photos</div>
                </div>
            </div>
            <div>
                <div className="innerPort position-relative">
                    <img src="Images/port-2.jpeg" className="w-100" alt="" />
                    <div className="desPort">Evotech - Evolution in Technology</div>
                </div>
            </div>  
            <div>
                <div className="innerPort position-relative">
                    <img src="Images/port-3.jpeg" className="w-100" alt="" />
                    <div className="desPort">Elliott Moss - Proven Methodology</div>
                </div>
            </div> 
            <div>
                <div className="innerPort position-relative">
                    <img src="Images/port-4.jpeg" className="w-100" alt="" />
                    <div className="desPort">Leasing Towers</div>
                </div>
            </div> 
            <div>
                <div className="innerPort position-relative">
                    <img src="Images/port-5.jpeg" className="w-100" alt="" />
                    <div className="desPort">Igaa</div>
                </div>
            </div> 
            <div>
                <div className="innerPort position-relative">
                    <img src="Images/port-6.jpeg" className="w-100" alt="" />
                    <div className="desPort">Rizingsun</div>
                </div>
            </div> 
        </OwlCarousel>
    );
}


export default CrouselPortfolio;