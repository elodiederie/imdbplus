import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/InPageSlideshow.module.scss"
import LightBox, { Modal, ModalGateway } from "react-images";


const InPageSlideshow = ({ pictures }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1440, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  

  //returning the HTML
  return (

    <div className={styles.carouselwrapper}>
      <Carousel swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 0.5s ease-in-out"
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style">
        {pictures.map((item, indx) => {
          return (
            <div className={styles.item} key={indx}>
              <div className={styles.mainpicture} style={{ backgroundImage: `url("${item.filename}")` }}>
              </div>
            </div>

          );
        })}
      </Carousel>
    </div>
  )
}

export default InPageSlideshow
